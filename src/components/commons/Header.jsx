import React, { useState, useEffect } from "react";
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

  // Handle scrolling to add a class for a fixed header
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (window.scrollY > 0) {
        header.classList.add("fixed-header");
      } else {
        header.classList.remove("fixed-header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className="header drop-shadow-lg bg-gray-100 flex justify-between items-center p-4 md:p-6 relative z-50 transition-all duration-300"
    >
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
        {/* Navigation Buttons */}
        {["home", "experience", "education", "resume", "portfolio", "blog"].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="hover:text-pink-600"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
        <Link
          to="/buy-now"
          className="text-pink-500 hover:text-white bg-gray-100 hover:bg-red-500 p-2 border-transparent shadow-lg rounded-md"
        >
          Buy Now
        </Link>
      </nav>

      {/* Mobile Menu - Visible only when menu is open */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-lg sm:hidden z-40">
          <ul className="flex flex-col items-center p-4 space-y-4">
            {["home", "experience", "education", "resume", "portfolio", "blog"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => {
                    scrollToSection(section);
                    toggleMenu();
                  }}
                  className="text-gray-500 hover:text-pink-600"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
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
