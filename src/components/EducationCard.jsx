import React from 'react';
import '../App.css'; 
import { Link } from "react-router-dom";

const EducationCard = ({ image, date, title, role, description }) => {
  return (
    <div className=" bg-white rounded-lg flex flex-col md:flex-row overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full md:w-1/3 h-48 md:h-auto object-cover education-card p-5 rounded-lg" />
      <div className="p-4 flex-1">
        <span className="text-xs font-semibold text-white bg-pink-600 mt-7 px-3 py-2 rounded-3xl uppercase tracking-wide mb-2 inline-block">
          {date}
        </span>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
        <p className="mb-2 font-normal text-xl text-gray-600 ">{role}</p>
        <p className="mb-2 font-normal text-gray-600 ">{description}</p>
      </div>
      <div className="p-4 flex items-center justify-center md:justify-start">
        <Link to='/contact' className="text-pink-500 hover:text-white bg-gray-100 resumeColor font-semibold p-3 border-transparent shadow-lg rounded-md border header-button flex sm:items-start ">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default EducationCard;
