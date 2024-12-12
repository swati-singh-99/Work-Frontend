import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">React-Hooks</div>
        <nav className="flex-1">
          <ul className="flex justify-center space-x-24">
            <li>
              <Link
                to="/usecallback"
                className="hover:text-gray-400 transition duration-300"
              >
                useCallback
              </Link>
            </li>
            <li>
              <Link
                to="/usememo"
                className="hover:text-gray-400 transition duration-300"
              >
                useMemo
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
