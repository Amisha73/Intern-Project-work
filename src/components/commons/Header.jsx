import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import logo from "../../Images/logo-dark.png";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";

const Header = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header drop-shadow-lg bg-gray-100 flex justify-between items-center p-4 md:p-6">
      <div className="ml-3">
        <img src={logo} alt="logo" className="w-24 md:w-32" />
      </div>

      {/* Hamburger Icon for small screens */}
      <div
        className="text-2xl text-pink-600 sm:hidden cursor-pointer"
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes /> : <CiMenuFries />}
      </div>

      {/* Navbar Links - Hidden on small screens, shown on medium and up */}
      <nav className="capitalize text-gray-500 mr-6 hidden sm:flex space-x-6 items-center">
        <button
          onClick={() => scrollToSection("home")}
          className="hover:text-pink-600"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("experience")}
          className="hover:text-pink-600"
        >
          Experience
        </button>
        <button
          onClick={() => scrollToSection("education")}
          className="hover:text-pink-600"
        >
          Education
        </button>
        <button
          onClick={() => scrollToSection("resume")}
          className="hover:text-pink-600"
        >
          Resume
        </button>
        <button
          onClick={() => scrollToSection("portfolio")}
          className="hover:text-pink-600"
        >
          Portfolio
        </button>
        <button
          onClick={() => scrollToSection("blog")}
          className="hover:text-pink-600"
        >
          Blog
        </button>
        <button
          onClick={() => scrollToSection("footer")}
          className="hover:text-pink-600"
        >
          Footer
        </button>
        <Link
          to="/buy-now"
          className="text-pink-500 hover:text-white bg-gray-100 hover:bg-red-500 p-2 border-transparent shadow-lg rounded-md"
        >
          Buy Now
        </Link>
      </nav>

      {/* Mobile Menu - Visible only when menu is open */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-lg sm:hidden">
          <ul className="flex flex-col items-center p-4 space-y-4">
            <li>
              <button
                onClick={() => {
                  scrollToSection("home");
                  toggleMenu();
                }}
                className="text-gray-500 hover:text-pink-600"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("experience");
                  toggleMenu();
                }}
                className="text-gray-500 hover:text-pink-600"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("education");
                  toggleMenu();
                }}
                className="text-gray-500 hover:text-pink-600"
              >
                Education
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("resume");
                  toggleMenu();
                }}
                className="text-gray-500 hover:text-pink-600"
              >
                Resume
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("portfolio");
                  toggleMenu();
                }}
                className="text-gray-500 hover:text-pink-600"
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("blog");
                  toggleMenu();
                }}
                className="text-gray-500 hover:text-pink-600"
              >
                Blog
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("footer");
                  toggleMenu();
                }}
                className="text-gray-500 hover:text-pink-600"
              >
                Footer
              </button>
            </li>
            <li>
              <Link
                to="/buy-now"
                onClick={toggleMenu}
                className="text-pink-500 hover:text-white bg-gray-100 hover:bg-red-500 p-2 border-transparent shadow-lg rounded-md"
              >
                Buy Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
