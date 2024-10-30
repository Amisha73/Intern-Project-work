import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: 1,
      title: "The services provide for design",
      category: "Photoshop",
      image: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-06.jpg",
      likes: 650,
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi."
    },
    {
      id: 2,
      title: "Mobile app landing design & Services",
      category: "Figma",
      image: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-05.jpg",
      likes: 650,
      description: "Consectetur adipiscing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!"
    },
    {
      id: 3,
      title: "Web app Responsive design & Services",
      category: "Laravel",
      image: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-04.jpg",
      likes: 650,
      description: "Some more details about the web app responsive design and services."
    },
    {
      id: 4,
      title: "PHP with app landing design & Services",
      category: "Figma",
      image: "https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-03.jpg",
      likes: 650,
      description: "Detailed insights into the PHP application design and services offered."
    },
  ];

  // Adjust the number of visible items based on screen width
  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth >= 1024) {
        setVisibleItems(3);
      } else if (window.innerWidth >= 768) {
        setVisibleItems(2);
      } else {
        setVisibleItems(1);
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

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="py-10 px-5 bg-gray-50">
      <div className="text-center mb-10">
        <p className="text-center text-[16px] text-pink-600 uppercase">
          Visit my portfolio and keep your feedback
        </p>
        <h2 className="text-center text-[30px] font-bold text-gray-700 sm:text-[60px]">
          My Portfolio
        </h2>
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
          className={`grid gap-4 sm:p-5 overflow-hidden ${
            visibleItems === 1
              ? "grid-cols-1"
              : visibleItems === 2
              ? "grid-cols-2"
              : "grid-cols-3"
          }`}
        >
          {items
            .slice(currentIndex, currentIndex + visibleItems)
            .map((item) => (
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
                <h2
                  className="text-lg font-semibold text-gray-800 hover:text-pink-600 p-4 cursor-pointer"
                  onClick={() => openModal(item)}
                >
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

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 fixed inset-0 z-50">
          <div className="relative max-w-xl p-8 bg-white rounded-lg shadow-lg">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
              onClick={closeModal}
            >
              <span className="sr-only">Close</span>
              <IoClose/>
            </button>

            {/* Image Section */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="object-cover w-full h-60"
              />
            </div>

            {/* Text Content */}
            <div className="mt-4 text-left">
              <h3 className="text-sm font-semibold text-gray-500">{selectedItem.category}</h3>
              <h2 className="mt-1 text-2xl font-bold text-gray-800">{selectedItem.title}</h2>
              <p className="mt-2 text-gray-600">{selectedItem.description}</p>

              {/* Buttons */}
              <div className="flex mt-4 space-x-4">
                <button className="flex items-center px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-200 rounded hover:bg-gray-300">
                  LIKE THIS
                </button>
                <button className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-pink-500 rounded hover:bg-pink-600">
                  VIEW PROJECT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
