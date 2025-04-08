

'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiSearch, FiUser, FiShoppingCart, FiChevronDown, FiX, FiMenu } from 'react-icons/fi';
import { NAV_CONFIG } from '../constant/primarynavbar.constant';

export function PrimaryNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);

  return (
    <header className="bg-blue-500 text-white shadow-sm sticky top-0 z-50">
      
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-md"
            >
              {mobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex items-center">
            <Link href={NAV_CONFIG.brand.href} className="text-xl font-bold text-gray-900">
              {NAV_CONFIG.brand.name}
            </Link>
          </div>

          {/* Desktop Categories */}
          <nav className="hidden md:flex space-x-8">
            {NAV_CONFIG.categories.map((category) => (
              <div key={category.name} className="relative">
                <button
                  onMouseEnter={() => setActiveCategory(category.name)}
                  onMouseLeave={() => setActiveCategory(null)}
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  {category.name}
                  <FiChevronDown className="ml-1" />
                </button>

                {activeCategory === category.name && (
                  <div
                    onMouseEnter={() => setActiveCategory(category.name)}
                    onMouseLeave={() => setActiveCategory(null)}
                    className="absolute z-10 left-0 mt-2 w-56 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
                  >
                    {category.subItems?.map((group) => (
                      <div key={group.title} className="py-2">
                        <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          {group.title}
                        </h3>
                        {group.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="p-2 text-gray-400 hover:text-gray-500"
            >
              <FiSearch className="h-5 w-5" />
            </button>

            <Link href="/cart" className="p-2 text-gray-400 hover:text-gray-500 relative">
              <FiShoppingCart className="h-5 w-5" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_CONFIG.categories.map((category) => (
              <div key={category.name} className="relative">
                <button
                  onClick={() => setActiveCategory(
                    activeCategory === category.name ? null : category.name
                  )}
                  className="flex w-full justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  {category.name}
                  <FiChevronDown className={`transition-transform ${
                    activeCategory === category.name ? 'transform rotate-180' : ''
                  }`} />
                </button>

                {activeCategory === category.name && (
                  <div className="pl-4 space-y-1">
                    {category.subItems?.map((group) => (
                      <div key={group.title} className="pt-2">
                        <h3 className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          {group.title}
                        </h3>
                        {group.items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="border-t border-gray-200 pt-4">
              {!isLoggedIn ? (
                <div className="flex space-x-4 px-3">
                  <Link
                    href={NAV_CONFIG.authLinks.login.href}
                    className="w-full px-4 py-2 text-center text-sm font-medium text-indigo-600 hover:text-indigo-800 border border-indigo-600 rounded-md"
                  >
                    {NAV_CONFIG.authLinks.login.name}
                  </Link>
                  <Link
                    href={NAV_CONFIG.authLinks.register.href}
                    className="w-full px-4 py-2 text-center text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
                  >
                    {NAV_CONFIG.authLinks.register.name}
                  </Link>
                </div>
              ) : (
                <div className="space-y-1">
                  <Link
                    href="/dashboard"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  >
                    {NAV_CONFIG.userMenu.dashboard}
                  </Link>
                  <Link
                    href="/orders"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  >
                    {NAV_CONFIG.userMenu.orders}
                  </Link>
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  >
                    {NAV_CONFIG.userMenu.logout}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Search Panel */}
      {searchOpen && (
        <div className="absolute inset-x-0 top-0 bg-white z-50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, brands..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                autoFocus
              />
              <div className="absolute left-3 top-3.5 text-gray-400">
                <FiSearch className="h-5 w-5" />
              </div>
              <button
                onClick={toggleSearch}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-500"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}