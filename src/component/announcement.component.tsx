'use client'

import Link from "next/link"
import { rightLinks, topLinks } from "../constant/announcement.constant"


const TopAnnouncementBar = () => {
 

  return (
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
  )
}

export default TopAnnouncementBar