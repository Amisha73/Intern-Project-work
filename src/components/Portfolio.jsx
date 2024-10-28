// src/components/Carousel.js
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "tailwindcss/tailwind.css";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);

  const items = [
    {
      id: 1,
      title: "The services provide for design",
      category: "Photoshop",
      image: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-06.jpg",
      likes: 650,
    },
    {
      id: 2,
      title: "Mobile app landing design & Services",
      category: "Figma",
      image: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-05.jpg",
      likes: 650,
    },
    {
      id: 3,
      title: "Web app Responsive design & Services",
      category: "Laravel",
      image: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-04.jpg",
      likes: 650,
    },
    {
      id: 4,
      title: "PHP with app landing design & Services",
      category: "Figma",
      image: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-03.jpg",
      likes: 650,
    },
  ];

  // Adjust the number of visible items based on screen width
  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(3); // Show 3 items on large screens
      } else if (window.innerWidth >= 768) {
        setVisibleItems(2); // Show 2 items on medium screens
      } else {
        setVisibleItems(1); // Show 1 item on small screens
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - visibleItems : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - visibleItems ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="py-10 px-5 bg-gray-50">
      <div className="text-center mb-10">
        <p className="text-pink-600 uppercase text-sm">
          Visit my portfolio and keep your feedback
        </p>
        <h2 className="text-3xl font-bold text-gray-800">My Portfolio</h2>
      </div>

      <div className="flex items-center justify-center space-x-4">
        {/* Previous Arrow */}
        <button
          className="bg-white p-2 rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition duration-300"
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>

        {/* Carousel Container */}
        <div
          className={`grid gap-4 p-5 overflow-hidden ${
            visibleItems === 1 ? "grid-cols-1" : visibleItems === 2 ? "grid-cols-2" : "grid-cols-3"
          }`}
        >
          {items.slice(currentIndex, currentIndex + visibleItems).map((item) => (
            <div
              key={item.id}
              className="w-full bg-color image-transition rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-2xl p-4"
              />
              <div className="p-4 flex justify-between">
                <span className="text-xs font-semibold text-pink-500 uppercase tracking-wide">
                  {item.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="font-light">🤍 {item.likes}</span>
                </div>
              </div>
              <h2 className="text-lg font-semibold text-gray-800 hover:text-pink-600 p-4">
                {item.title}
              </h2>
            </div>
          ))}
        </div>

        {/* Next Arrow */}
        <button
          className="bg-white p-2 rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition duration-300"
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
