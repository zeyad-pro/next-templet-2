"use client"
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#F5F7FA]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <img src="/web imgs/Logo.png" alt="Logo" className="h-6" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                    History
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                    Services
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Buttons + Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4 hidden md:flex">
              <a
                className="rounded-md main-bgcolor px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                href="#"
              >
                Login
              </a>
              <a
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium main-color border-1"
                href="#"
              >
                Register
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="block md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                {isOpen ? (
                  // Close Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  // Hamburger Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <nav className="md:hidden mb-4">
            <ul className="flex flex-col gap-4 text-sm bg-white p-4 rounded-lg shadow">
              <li>
                <a className="text-gray-500 transition hover:text-gray-700" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-700" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-700" href="#">
                  History
                </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-700" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-700" href="#">
                  Projects
                </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-700" href="#">
                  Blog
                </a>
              </li>
             
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
