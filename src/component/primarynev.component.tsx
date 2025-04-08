

"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { BrandName } from "@/brandname"
import { navbarData } from "@/constant/primarynavbar.constant"

export default function PrimaryNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<number | null>(null)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleMegaMenuHover = (index: number) => {
    setHoveredItem(index)
    setActiveMegaMenu(index)
  }

  const handleMegaMenuLeave = () => {
    setHoveredItem(null)
    setActiveMegaMenu(null)
  }

  return (
    <header className="bg-white shadow-sm relative">
      {/* Top Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-blue-600 font-bold text-xl">
              <BrandName/>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navbarData.topNav.map((item, index) => (
              <div key={index} className="relative h-full" 
                onMouseEnter={() => handleMegaMenuHover(index)}
                onMouseLeave={handleMegaMenuLeave}
              >
                <Link
                  href={item.url}
                  className={`relative text-sm py-4 transition-colors ${
                    hoveredItem === index 
                      ? "text-blue-600" 
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.title}
                  {hoveredItem === index && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
                  )}
                </Link>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-gray-700 hover:text-blue-600" 
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu (Desktop) */}
      {activeMegaMenu !== null && (
        <div
          className="hidden md:block absolute left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200"
          onMouseLeave={handleMegaMenuLeave}
        >
          <div className="container mx-auto px-4 py-4">
            <div className={`grid grid-cols-${navbarData.topNav[activeMegaMenu].megaMenu.columns} gap-8`}>
              {navbarData.topNav[activeMegaMenu].megaMenu.content.map((section, index) => (
                <div key={index} className="py-2">
                  {section.title && (
                    <h3 className="text-gray-900 font-medium mb-3">{section.title}</h3>
                  )}
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link 
                          href={item.url} 
                          className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-1">
            {navbarData.topNav.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center">
                  <Link
                    href={item.url}
                    className={`block py-3 ${
                      activeMegaMenu === index 
                        ? "text-blue-600" 
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item.title}
                  </Link>
                  {item.megaMenu && (
                    <button
                      onClick={() => setActiveMegaMenu(activeMegaMenu === index ? null : index)}
                      className="p-2"
                    >
                      <ChevronDown
                        size={16}
                        className={`transform transition-transform ${
                          activeMegaMenu === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                
                {activeMegaMenu === index && item.megaMenu && (
                  <div className="pl-4 py-1">
                    <div className="grid grid-cols-1 gap-2">
                      {item.megaMenu.content.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          {section.title && (
                            <h4 className="font-medium text-gray-900 mb-2">{section.title}</h4>
                          )}
                          <ul className="space-y-2">
                            {section.items.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link 
                                  href={subItem.url} 
                                  className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                                >
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}



















