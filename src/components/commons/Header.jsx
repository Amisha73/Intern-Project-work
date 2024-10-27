// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import logo from "../../Images/logo-dark.png";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  return (
    <header className="header drop-shadow-lg bg-gray-100 ">
      <div className="ml-3 ">
        <img src={logo} alt="logo" />
      </div>
      <div> <CiMenuFries className="text-2xl text-pink-600 sm:hidden font-semibold "/> </div>
      <nav className=" capitalize text-gray-500 mr-6 sm:block hidden ">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/footer">Footer</Link>
          </li>
          <Link to="/buy-now" className="text-pink-500 hover:text-white bg-gray-100 hover:bg-red-500 p-3 border-transparent shadow-lg rounded-md border header-button ml-5 ">Buy Now</Link>
        </ul>
      </nav>
      
    </header>
  );
};

export default Header;
