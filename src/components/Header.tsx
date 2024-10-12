import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const cartItemsCount = useSelector(
    (state: RootState) => state.cart.items.length
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-blue-600 text-white p-4 sticky top-0 z-10 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Shopping Store</Link>
        </h1>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center w-full md:w-auto`}
        >
          {/* Mobile menu */}
          <div
            className={`absolute right-0 top-0 bg-blue-600 w-full z-20 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex justify-between items-center p-4">
              <h2 className="text-2xl font-bold">
                <Link to="/">Shopping Store</Link>
              </h2>
              <button
                onClick={toggleMenu}
                aria-label="Close menu"
                className="text-white"
              >
                <FaTimes />
              </button>
            </div>
            <ul className="flex flex-col space-y-2 p-4">
              <li>
                <Link
                  to="/"
                  className="hover:text-gray-200 transition duration-300"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="flex items-center hover:text-gray-200 transition duration-300"
                  onClick={toggleMenu}
                >
                  <FaShoppingCart className="mr-1" />
                  Cart ({cartItemsCount})
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex md:flex-row space-x-6">
            <li>
              <Link
                to="/"
                className="hover:text-gray-200 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="flex items-center hover:text-gray-200 transition duration-300"
              >
                <FaShoppingCart className="mr-1" />
                Cart ({cartItemsCount})
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
