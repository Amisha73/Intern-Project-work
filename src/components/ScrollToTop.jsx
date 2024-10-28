import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import '../App.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-pink-500 text-white p-3 rounded-full shadow-lg resumeColor transition duration-300"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
