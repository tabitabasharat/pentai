// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-[24px] md:py-[32px] ">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand */}
          <div className="flex items-center lg:mr-[40px]">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img src="/Images/Logo.svg" alt="Logo" className="h-[53px] w-[120px]" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center flex-1 justify-start">
            <div className="flex items-cente ">
              <Link
                href="/"
                className="text-[#4C5155] font-[dm-semibold] hover:text-[#ECEDEE] py-[19px] px-4 lg:px-[40px] rounded-md text-[18px] lg:text-[20px] transition duration-300"
              >
                Home
              </Link>
              <Link
                href="/SecrtChat"
                className="text-[#4C5155] font-[dm-semibold] hover:text-[#ECEDEE] py-[19px] px-4 lg:px-[40px] rounded-md text-[18px] lg:text-[20px] transition duration-300"
              >
                SecrtChat
              </Link>
              <Link
                href="/GenPen"
                className="text-[#4C5155] hover:text-[#ECEDEE] py-[19px] px-4 lg:px-[40px] rounded-md font-[dm-semibold] text-[18px] lg:text-[20px] transition duration-300"
              >
                GenPen
              </Link>
              <Link
                href="/contact"
                className="text-[#4C5155] hover:text-[#ECEDEE] py-[19px] px-4 lg:px-[40px] rounded-md font-[dm-semibold] text-[18px] lg:text-[20px] transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Dashboard Button - Desktop */}
          <div className="hidden md:flex items-center">
            <Link
              href="/dashboard"
              style={{
                background:
                  "linear-gradient(326.41deg, #301A3A 17.49%, #442155 58.62%)",
              }}
              className="text-white hover:brightness-110 px-4 py-2 lg:px-6 lg:py-[14px] rounded-full text-[14px] lg:text-[15px] font-[dm-semibold] transition duration-300"
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#4C5155] hover:text-[#ECEDEE] hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1C1C1C] border-t border-gray-800">
          <Link
            href="/"
            className="text-[#4C5155] hover:text-[#ECEDEE] block py-4 px-4 rounded-md font-[dm-semibold] text-[18px] transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/SecrtChat"
            className="text-[#4C5155] hover:text-[#ECEDEE] block py-4 px-4 rounded-md font-[dm-semibold] text-[18px] transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            SecrtChat
          </Link>
          <Link
            href="/GenPen"
            className="text-[#4C5155] hover:text-[#ECEDEE] block py-4 px-4 rounded-md font-[dm-semibold] text-[18px] transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            GenPen
          </Link>
          <Link
            href="/contact"
            className="text-[#4C5155] hover:text-[#ECEDEE] block py-4 px-4 rounded-md font-[dm-semibold] text-[18px] transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <div className="px-4 py-2">
            <Link
              href="/dashboard"
              style={{
                background:
                  "linear-gradient(326.41deg, #301A3A 17.49%, #442155 58.62%)",
              }}
              className="text-white hover:brightness-110 w-full block text-center px-3 py-3 rounded-full text-[15px] font-[dm-semibold] transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;