// src/components/Footer.js
import React from "react";
import logo from "../../Images/logo-dark.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import '../../App.css'

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row justify-around">
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="logo" className="mb-4" />
          <div>
            <ul className="flex gap-6 mt-6">
              <li className="bg-slate-50 shadow-lg text-gray-700 p-3 text-2xl rounded-md hover:text-white hover:bg-red-500 header-button">
                <Link to="/">
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="bg-slate-50 shadow-lg text-gray-700 p-3 text-2xl rounded-md hover:text-white hover:bg-red-500 header-button">
                <Link to="/">
                  <FaInstagram />
                </Link>
              </li>
              <li className="bg-slate-50 shadow-lg text-gray-700 p-3 text-2xl rounded-md hover:text-white hover:bg-red-500 header-button">
                <Link to="/">
                  <FaTwitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-20 mt-6 md:mt-0">
          <div className="mb-6 md:mb-0">
            <h2 className="text-pink-600 capitalize text-2xl font-semibold">Product</h2>
            <ul className="text-gray-500 space-y-4 mt-3">
              <li className="hover:bg-white hover:text-gray-700 header-button">
                <Link to="/database">Database</Link>
              </li>
              <li className="hover:bg-white hover:text-gray-700 header-button">
                <Link to="/authentication">Authentication</Link>
              </li>
              <li className="hover:bg-white hover:text-gray-700 header-button">
                <Link to="/storage">Storage</Link>
              </li>
              <li className="hover:bg-white hover:text-gray-700 header-button">
                <Link to="/support">Support</Link>
              </li>
              <li className="hover:bg-white hover:text-gray-700 header-button">
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h2 className="text-pink-600 capitalize text-2xl font-semibold">Resources</h2>
            <ul className="text-gray-500 space-y-4 mt-3">
              <li className="hover:bg-white hover:text-gray-700 header-button">
                <Link to="/">Authentication</Link>
              </li>
              <li className="hover:bg-white hover:text-gray-700 header-button">
                <Link to="/">System Status</Link>
              </li>
              <li className="hover:bg-white hover:text-gray-700 header-button">
                <Link to="/">Terms of Service</Link>
              </li>
              <li className="hover:bg-white hover:text-gray-700 header-button">
                <Link to="/">Pricing</Link>
              </li>
              <li className="hover:bg-white hover:text-gray-700 header-button">
                <Link to="/">Over Right</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-pink-600 capitalize text-2xl font-semibold">Developers</h2>
            <ul className="text-gray-500 space-y-4 mt-3">
              <li className="hover:bg-white hover:text-gray-700 header-button">
                <Link to="">Documentation</Link>
              </li>
              <li className="hover:bg-white hover:text-gray-700 header-button">
                <Link to="">Authentication</Link>
              </li>
              <li className="hover:bg-white hover:text-gray-700 header-button">
                <Link to="">API References</Link>
              </li>
              <li className="hover:bg-white hover:text-gray-700 header-button">
                <Link to="">Support</Link>
              </li>
              <li className="hover:bg-white hover:text-gray-700 header-button">
                <Link to="">Open Source</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-14"></div>
      <div className="text-gray-500 mt-6 text-center sm:text-[18px]">
        © 2022. All rights reserved by <span className="hover:text-pink-600 cursor-pointer">Rainbow-Themes</span>.
      </div>
    </footer>
  );
};

export default Footer;
