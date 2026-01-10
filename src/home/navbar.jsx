import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-between w-full px-4 py-4 sm:px-5 md:px-4 lg:px-13">
      <div className="logo">
        <h1 className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">
          Wildlife Foundation
        </h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden nav-links md:block">
        <ul className="flex gap-3 font-semibold list-none md:gap-2 lg:gap-8">
          <li>
            <Link to="/#About" className="hover:text-[#007AFF]">
              About
            </Link>
          </li>
          <li>
            <Link to="/#protect" className="hover:text-[#007AFF]">
              Wildlife
            </Link>
          </li>
          <li>
            <Link to="/#conservation" className="hover:text-[#007AFF]">
              Conservation
            </Link>
          </li>
          <li>
            <Link to="/#movement" className="hover:text-[#007AFF]">
              Get Involved
            </Link>
          </li>
          <li>
            <Link to="/donate" className="hover:text-[#007AFF]">
              Donate
            </Link>
          </li>
        </ul>
      </div>

      <Link
        to="/donate"
        className="hidden md:block bg-[#007AFF] text-white text-sm md:text-base font-semibold px-3 md:px-4 lg:px-6 py-2 lg:py-3 rounded-lg"
      >
        Donate Now
      </Link>

      {/* Mobile Menu Button */}
      <button className="p-2 md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 z-50 mt-1 bg-white shadow-lg top-full md:hidden">
          <ul className="flex flex-col gap-3 p-4 text-sm font-semibold list-none">
            <li>
              <Link
                to="/#About"
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-[#007AFF]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/#protect"
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-[#007AFF]"
              >
                Wildlife
              </Link>
            </li>
            <li>
              <Link
                to="/#conservation"
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-[#007AFF]"
              >
                Conservation
              </Link>
            </li>
            <li>
              <Link
                to="/#movement"
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-[#007AFF]"
              >
                Get Involved
              </Link>
            </li>
            <li>
              <Link
                to="/donate"
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-[#007AFF]"
              >
                Donate
              </Link>
            </li>
            <li className="pt-2 border-t">
              <Link
                to="/explore"
                className="bg-[#007AFF] text-white text-sm font-semibold px-4 py-2 rounded-lg block text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Donate Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
