// File: components/navbar/CategoryNavigation.tsx
'use client'
// import { NavItem } from '@/type/navbar.type'
// import { NAV_ITEMS } from '@/constant/navbar.constant'
import { FaChevronDown, FaChevronRight, FaStore, FaListAlt, 
         FaCrown, FaUsers, FaShieldAlt, 
         FaSearch,
         FaUser,
         FaShoppingCart} from 'react-icons/fa'
import { MdOutlineComputer } from 'react-icons/md'
import { CategoryNavigationProps , NavItem } from '../type/navbar.type'
import { NAV_ITEMS } from '../constant/navbar.constant'
import Link from 'next/link'


const CategoryNavigation = ({ 
  isMobileMenuOpen, 
  activeMenu, 
  setActiveMenu, 
  renderMegaMenu,
  renderNavItem
}: CategoryNavigationProps) => {
  return (
    <>
      <div className="hidden md:flex items-center justify-between mt-2">
        <ul className="flex space-x-1">
          {NAV_ITEMS.map(item => renderNavItem(item))}
        </ul>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="absolute right-2 top-2 text-text-muted">
                <FaSearch/>
              </button>
            </div>
          </div>

          <ul className="divide-y divide-gray-200">
            {NAV_ITEMS.map(item => renderNavItem(item))}
          </ul>

          <div className="p-4 border-t border-gray-200">
            <Link href="/account" className="flex items-center py-2 text-text-secondary">
                <FaUser className="mr-3" />
                Account
            </Link>
            
            <Link href="/cart" className="flex items-center py-2 text-text-secondary">
                <FaShoppingCart className="mr-3" />
                My Orders
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default CategoryNavigation