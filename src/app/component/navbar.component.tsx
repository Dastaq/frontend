// File: components/Navbar.tsx
'use client'
import React, { useState, useEffect, useRef } from 'react';
import {
  FaChevronDown, FaChevronRight, FaSearch, FaUser, FaShoppingCart,
  FaStore, FaTimes, 
} from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { MdOutlineComputer } from 'react-icons/md';
import { NavItem } from '../type/navbar.type';
import { NAV_ITEMS } from '../constant/navbar.constant';
import Link from 'next/link';
import CategoryNavigation from './navigation.component';
import TopAnnouncementBar from './announcement.component';
import { rightLinks, topLinks } from '../constant/announcement.constant';
import Input from './UI/input';
import { Button } from './UI/button';

const Navbar: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }

    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMenu(null);
  };

  const handleMenuToggle = (id: string, event?: React.MouseEvent) => {
    event?.stopPropagation();
    setActiveMenu(activeMenu === id ? null : id);
  };
  const placeholderOptions = [
    'Search products...',
    'Find deals...',
    'Explore categories...',
    'Shop now...',
  ];
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);  

  const renderMegaMenu = (item: NavItem) => {
    if (!item.columns) return null;

    return (
      <div className={`absolute right-0 w-full ${isMobileMenuOpen ? 'relative mt-2' : ''}`}>
        <div
          className={`
            container mx-auto bg-white shadow-xl z-50 py-6 px-8 flex flex-row-reverse 
            gap-8 border-t border-gray-200 flex-wrap
            ${isMobileMenuOpen ? 'p-4' : ''}
          `}
        >
          {item.columns.map((column, colIndex) => (
            <div key={colIndex} className="space-y-4 min-w-[200px]">
              <h3 className="text-lg font-semibold text-text-primary border-b border-gray-200 pb-2 flex items-center">
                {column.titleIcon && <span className="mr-2 text-primary">{column.titleIcon}</span>}
                {column.title}
              </h3>
              <ul className="space-y-4">
                {column.items.map((menuItem, itemIndex) => (
                  <li key={itemIndex} className="flex flex-col group">
                    <a
                      href={menuItem.href}
                      className="flex items-center text-text-secondary hover:text-primary transition-colors"
                    >
                      {menuItem.icon && (
                        <span className="mr-3 text-primary group-hover:scale-110 transition-transform">
                          {menuItem.icon}
                        </span>
                      )}
                      <span className="flex-1 font-medium">{menuItem.label}</span>
                      {menuItem.badge && (
                        <span
                          className="ml-2 px-2 py-0.5 text-xs font-medium rounded-full"
                          style={{ backgroundColor: menuItem.badge.color, color: 'white' }}
                        >
                          {menuItem.badge.text}
                        </span>
                      )}
                    </a>
                    {menuItem.description && (
                      <p className="text-sm text-text-muted mt-1 ml-8">{menuItem.description}</p>
                    )}
                    {menuItem.subItems && (
                      <ul className="ml-8 mt-2 space-y-2">
                        {menuItem.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.href}
                              className="text-sm text-text-secondary hover:text-primary flex items-center"
                            >
                              <FaChevronRight className="mr-1 text-xs opacity-70" />
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              {column.viewAll && (
                <div className="pt-2 border-t border-gray-100">
                  <a
                    href={column.viewAll.href}
                    className="text-primary hover:text-primary-dark text-sm font-medium flex items-center"
                  >
                    {column.viewAll.label}
                    <FaChevronRight className="ml-1" size={12} />
                  </a>
                </div>
              )}
              {column.footerText && <p className="text-xs text-text-muted mt-4">{column.footerText}</p>}
            </div>
          ))}
        </div>
      </div>
    );
  };




  // Function to render each navigation item
  // This function handles the rendering of both top-level and sub-level navigation items
  const renderNavItem = (item: NavItem, depth = 0) => {
    const hasChildren = item.children || item.isMegaMenu;
    const isActive = activeMenu === item.id;

    return (
      <li
        key={item.id}
        className={`relative ${depth === 0 ? 'group' : ''}`}
        onMouseEnter={() => !isMobileMenuOpen && depth === 0 && hasChildren && setActiveMenu(item.id)}
        onMouseLeave={() => !isMobileMenuOpen && depth === 0 && hasChildren && setActiveMenu(null)}
      >
        <div className={`flex items-center ${item.isVendorAction ? 'bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md' : ''}`}>
          <a
            href={item.href || '#'}
            className={`flex items-center ${depth === 0 ? 'px-4 py-5' : 'px-3 py-2'} ${item.isVendorAction ? 'text-white' : 'text-text-secondary hover:text-primary'
              } ${hasChildren ? 'font-semibold' : ''}`}
            onClick={(e) => {
              if (hasChildren) {
                e.preventDefault();
                handleMenuToggle(item.id, e);
              }
            }}
          >
            {item.icon && <span className="mr-2">{item.icon}</span>}
            {item.label}
          </a>

          {hasChildren && (
            <button
              onClick={(e) => handleMenuToggle(item.id, e)}
              className={`ml-1 p-1 focus:outline-none ${item.isVendorAction ? 'text-white' : 'text-text-muted'
                }`}
              aria-expanded={isActive}
              aria-label={`Toggle ${item.label} menu`}
            >
              {isMobileMenuOpen ? (
                isActive ? <FaChevronDown size={14} /> : <FaChevronRight size={14} />
              ) : (
                <FaChevronDown size={14} />
              )}
            </button>
          )}
        </div>

        {item.isMegaMenu && isActive && renderMegaMenu(item)}

        {item.children && !item.isMegaMenu && isActive && (
          <ul
            className={`bg-white shadow-lg rounded-md z-50 ${depth === 0 ? 'absolute top-full left-0 min-w-[240px] mt-0' : 'ml-4 mt-1'
              } ${isMobileMenuOpen ? 'relative shadow-none border-l border-gray-200' : ''}`}
          >
            {item.children.map(child => renderNavItem(child, depth + 1))}
          </ul>
        )}
      </li>
    );
  };

  if (!isMounted) {
    return null;
  }


  // Main Navbar Component
  return (
    <nav
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white border-b border-gray-200'
        }`}
    >

      <div className="bg-secondary text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            {topLinks.map((link, index) => (
              <Link key={index} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex space-x-4">
            {rightLinks.map((link, index) => (
              <Link key={index} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>



      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0">

            <Link href={'/'} className="text-2xl font-bold text-primary">
              <span className="text-sm">Dastak</span>
            </Link>
          </div>

          {/* Search bar for large screen */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="relative w-full max-w-2xl">
            <Input
        type="text"
        placeholder={placeholderOptions[currentPlaceholder]}
        size="md"
        fullWidth
        variant="outline"
        id="search"
        className="animate-placeholder"
      />
              <Button
                type="button"
                onClick={() => console.log('Search clicked')}
                variant="ghost"
                size="md"
                icon={<FaSearch />}
                className="absolute right-2 top-2" children={undefined}  />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="hidden md:flex items-center text-text-secondary hover:text-primary">
              <FaUser className="mr-1" />
              <span className="text-sm">Account</span>
            </a>
            <a href="#" className="hidden md:flex items-center text-text-secondary hover:text-primary">
              <FaShoppingCart className="mr-1" />
              <span className="text-sm">Cart</span>
            </a>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-text-secondary focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-between mt-2">
          <ul className="flex space-x-1">
            {NAV_ITEMS.map(item => renderNavItem(item))}
          </ul>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 top-2 text-text-muted">
                <FaSearch />
              </button>
            </div>
          </div>

          <ul className="divide-y divide-gray-200">
            {NAV_ITEMS.map(item => renderNavItem(item))}
          </ul>

          <div className="p-4 border-t border-gray-200">

            {/* <Link href={`/profile/${profile}`} className="flex items-center py-2 text-text-secondary">
              <FaUser className="mr-3" />
              My Account
            </Link> */}

            <a href="#" className="flex items-center py-2 text-text-secondary">
              <FaShoppingCart className="mr-3" />

            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;