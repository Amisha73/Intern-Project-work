import React from "react";
import "../App.css";
const BlogCard = ({ image, category, title, readTime }) => {
  return (
    <div className="blog-card bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg ">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover p-3 rounded-2xl transition-shadow duration-300"
      />
      <div className="p-4 flex justify-between">
        <span className="text-xs font-semibold text-pink-500 uppercase tracking-wide">
          {category}
        </span>
        <div className="flex justify-between items-center text-gray-500 text-sm ">
          <span className="font-light"> 🕓 {readTime} read</span>
        </div>
      </div>
      <h2 className="text-lg font-semibold text-gray-800 hover:text-pink-600 p-4">
        {title}
      </h2>
    </div>
  );
};

export default BlogCard;
