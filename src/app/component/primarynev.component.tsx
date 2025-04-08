// File: components/navbar/PrimaryNav.tsx
'use client'
import { useState } from 'react'
import { FaSearch, FaUser, FaShoppingCart, FaTimes } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'
import Link from 'next/link'
import { PrimaryNavProps } from '../type/navbar.type'


const PrimaryNav = ({ 
  searchQuery, 
  setSearchQuery, 
  toggleMobileMenu, 
  isMobileMenuOpen 
}: PrimaryNavProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center flex-shrink-0">
          <Link href={'/'} className="text-2xl font-bold text-primary">
            <span className="text-sm">Dastak</span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 mx-8">
          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search for products, suppliers, categories..."
              className="w-full px-4 py-2 border border-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-primary text-white rounded-r-md hover:bg-primary-dark focus:outline-none">
              <FaSearch />
            </button>
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
    </div>
  )
}

export default PrimaryNav