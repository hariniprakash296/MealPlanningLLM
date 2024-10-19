// app/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-beige border border-soft-yellow p-4 w-full fixed top-0 left-0 right-0 z-10 mx-4">
      <ul className="flex justify-between space-x-4">
        <li>
          <button className="button">
            Home
          </button>
        </li>
        <li>
          <button className="button">
            Calendar
          </button>
        </li>
        <li>
          <button className="button">
            Blogs
          </button>
        </li>
        <li>
          <button className="button">
            Calorie Tracker
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
