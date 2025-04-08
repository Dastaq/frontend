'use client';

import Link from "next/link";
import { useState } from "react";
import { FaTimes } from "react-icons/fa"; 

export const OfferLine = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-blue-500 py-3 px-4 shadow-lg relative">
      {/* Close button */}
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-colors"
        aria-label="Close offer banner"
      >
        <FaTimes className="h-5 w-5" />
      </button>
      
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 pr-6"> 
          <span className="text-white font-bold text-lg animate-pulse">✨</span>
          <p className="text-white font-medium text-sm md:text-base">
            Limited time offer! 
            <Link href="/products" className="text-yellow-300 font-bold hover:underline">
              <span className="font-bold mx-1">Shop now</span>
            </Link>
            and get
            <span className="font-extrabold mx-1 text-white bg-red-500 px-2 py-0.5 rounded-md">10% OFF</span>
          </p>
        </div>
      </div>
    </div>
  );
};
