// app/components/Navbar.tsx
import React from 'react';
import Link from 'next/link'; // Import Link for navigation
import Calendar from './Calendar';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-light-cream border border-gray-300 p-4 w-full fixed top-0 left-0 right-0 z-10 mx-auto rounded-full shadow-md max-w-6xl">
      <div className="flex justify-between items-center">
        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search for Recipes, Ingredients and Tags"
            className="w-full p-2 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <span className="absolute left-3 top-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 4a7 7 0 100 14 7 7 0 000-14zm0 0l6 6m-6-6l-6 6"
              />
            </svg>
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 ml-4">
          <li>
            <Link href="/" className="relative group">
              <span className="text-gray-700">Home</span>
              <span className="absolute left-0 right-0 bottom-0 h-1 bg-gray-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link href="/about" className="relative group">
              <span className="text-gray-700">About us</span>
              <span className="absolute left-0 right-0 bottom-0 h-1 bg-gray-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link href="./Calendar" className="relative group">
              <span className="text-gray-700">Calendar</span>
              <span className="absolute left-0 right-0 bottom-0 h-1 bg-gray-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="relative group">
              <span className="text-gray-700">Contact us</span>
              <span className="absolute left-0 right-0 bottom-0 h-1 bg-gray-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
