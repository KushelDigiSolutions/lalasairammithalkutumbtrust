"use client";
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Navbar has high z-index to stay above the drawer and overlay */}
      <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-[60] border-b border-amber-200 shadow-sm transition-all h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex-shrink-0 flex items-center">
  <Link
    href="/"
    onClick={closeMenu}
    className="flex items-center"
  >
    <Image
      src="/logo.jpeg"
      alt="Dudheshwar Temple Logo"
      width={70}
      height={70}
      priority
      className="w-16 h-16 sm:w-18 sm:h-18 object-contain"
    />
  </Link>
</div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-amber-600 font-medium transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-amber-600 font-medium transition-colors relative group">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-amber-600 font-medium transition-colors relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-amber-600 font-medium transition-colors relative group">
                Gallery
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-amber-600 font-medium transition-colors relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/donate" className="bg-saffron text-white px-6 py-2.5 rounded-full font-bold hover:bg-red-800 transition-colors shadow-md hover:shadow-lg whitespace-nowrap">
                Donate Now
              </Link>
            </div>

            {/* Hamburger / Close Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none transition-colors p-2.5  rounded-lg"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay - Appears below navbar (z-40) */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        style={{ top: '80px' }}
        onClick={closeMenu}
      />

      {/* Slide-in Menu (Right Side Drawer) - Slides below navbar (z-50) */}
      <div
        className={`fixed right-0 w-full bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col border-l border-amber-100 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ top: '80px', height: 'calc(100vh - 80px)' }}
      >
        {/* Menu Links */}
        <div className="px-6 py-8 space-y-4 w-full flex flex-col flex-grow overflow-y-auto">
          <Link href="/" onClick={closeMenu} className="block text-gray-800 font-medium text-lg hover:text-amber-600 hover:translate-x-2 transition-all p-3 rounded-lg hover:bg-amber-50">Home</Link>
          <Link href="/about" onClick={closeMenu} className="block text-gray-800 font-medium text-lg hover:text-amber-600 hover:translate-x-2 transition-all p-3 rounded-lg hover:bg-amber-50">About Us</Link>
          <Link href="/services" onClick={closeMenu} className="block text-gray-800 font-medium text-lg hover:text-amber-600 hover:translate-x-2 transition-all p-3 rounded-lg hover:bg-amber-50">Services</Link>
          <Link href="/gallery" onClick={closeMenu} className="block text-gray-800 font-medium text-lg hover:text-amber-600 hover:translate-x-2 transition-all p-3 rounded-lg hover:bg-amber-50">Gallery</Link>
          <Link href="/contact" onClick={closeMenu} className="block text-gray-800 font-medium text-lg hover:text-amber-600 hover:translate-x-2 transition-all p-3 rounded-lg hover:bg-amber-50">Contact</Link>

          <div className="mt-auto pt-8 pb-8">
            <Link href="/donate" onClick={closeMenu} className="block text-center bg-saffron text-white py-4 rounded-full font-bold shadow-md hover:bg-red-800 transition-colors hover:shadow-lg w-full text-lg whitespace-nowrap">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
