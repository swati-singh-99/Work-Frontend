import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-green-600 text-white py-4 mb-5">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
          Flower Cards
        </div>
        <nav className="flex-1">
          <ul className="flex justify-center space-x-24">
            <li>
              <Link to="/" className="hover:text-gray-400 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400 transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400 transition duration-300">
                Contact
              </Link>
            </li>
            <li className="relative">
              <div
                onClick={toggleDropdown}
                className="text-white rounded-md cursor-pointer hover:bg-gray-500 transition duration-300"
              >
                Categories
              </div>
              {isDropdownOpen && (
                <ul className="absolute bg-white text-black shadow-lg rounded-md w-40 mt-2">
                  <li>
                    <Link
                      to="/categories/flowers"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Flowers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/categories/plants"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Plants
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/categories/seeds"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Seeds
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
