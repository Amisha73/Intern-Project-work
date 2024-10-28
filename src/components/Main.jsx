import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import banner from "../Images/banner-02.png";

const Main = () => {
  return (
    <div className="p-8 sm:p-12 md:p-16 bg-gray-50">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
        {/* Banner Image for Large Screens */}
        <div className="sm:hidden block drop-shadow-md w-full lg:w-2/3">
          <div className="w-full h-full bg-slate-100 shadow-lg rounded-md">
            <img
              src={banner}
              alt="banner"
              className="p-7 rounded-md w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-2/3 h-full drop-shadow-lg">
          <div className="p-6 sm:p-8 md:p-9 border-transparent shadow-lg rounded-md bg-gray-100">
            {/* Icon */}
            <div className="border rounded-full mb-3 w-12 h-12 sm:w-16 sm:h-16 bg-pink-200 relative flex items-center justify-center">
              <RiContactsLine className="text-white bg-pink-500 rounded-full p-2 text-[30px] sm:text-[40px]" />
            </div>

            {/* Title and Introduction */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              Hi, I'm <span className="text-pink-600">InBio</span>
            </h1>
            <p className="text-[14px] sm:text-[15px] md:text-[17px] mt-4 text-gray-500">
              Web designer and developer working for evnato.com in Paris,
              France.
            </p>

            {/* Contact Information */}
            <div className="flex flex-col mt-4 space-y-4">
              <p className="text-[14px] sm:text-[15px] md:text-[17px] text-gray-500 flex items-center">
                <MdOutlineEmail className="text-pink-600 text-xl mr-2" />
                Web designer & developer
              </p>
              <p className="text-[14px] sm:text-[15px] md:text-[17px] text-gray-500 flex items-center">
                <MdOutlineEmail className="text-pink-600 text-xl mr-2" />
                john.slady@gmail.com
              </p>
              <p className="text-[14px] sm:text-[15px] md:text-[17px] text-gray-500 flex items-center">
                <FaLocationDot className="text-pink-600 text-xl mr-2" />
                Paris, France
              </p>
            </div>
          </div>

          {/* Download CV and Contact Buttons */}
          <div className="p-6 sm:p-8 md:p-9 mt-12 border-transparent shadow-lg rounded-md bg-gray-100 drop-shadow-lg">
            <h2 className="text-[16px] sm:text-[18px] mb-6 text-gray-600">
              Download my curriculum vitae:
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/#"
                className="text-pink-500 hover:text-white bg-gray-100 resumeColor p-3 text-center border-transparent shadow-lg rounded-md"
              >
                DOWNLOAD CV
              </Link>
              <Link
                to="/contact"
                className="text-pink-500 hover:text-white bg-gray-100 resumeColor p-3 text-center border-transparent shadow-lg rounded-md"
              >
                CONTACT ME
              </Link>
            </div>
          </div>
        </div>

        {/* Banner Image for Small to Medium Screens */}
        <div className="sm:block hidden w-full drop-shadow-md">
          <div className="w-full h-full bg-slate-100 shadow-lg rounded-md">
            <img
              src={banner}
              alt="banner"
              className="p-7 rounded-md w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
