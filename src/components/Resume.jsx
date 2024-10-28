import React, { useState } from "react";
import "../App.css";
import ResumeCard from './ResumeCard';

import Skills from "./Skills";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("Education");

  const renderContent = () => {
    switch (activeTab) {
      case "Education":
        return (
          <div>
            <ResumeCard />
          </div>
        );
      case "Professional Skills":
        return (
          <div>
            <Skills />
          </div>
        );
      case "Experience":
        return (
          <div>
            <ResumeCard />
          </div>
        );
      case "Interview":
        return (
          <div>
            <ResumeCard />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-5 lg:p-20">
      <p className="text-center text-[16px] text-pink-600">
        7+ YEARS OF EXPERIENCE
      </p>
      <h1 className="text-center text-[30px] font-bold text-gray-700 sm:text-[60px]">
        My Resume
      </h1>
      <div className="flex flex-wrap justify-center mb-8 mt-5 text-lg items-center gap-4">
        {["Education", "Professional Skills", "Experience", "Interview"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 ${
                activeTab === tab
                  ? "text-pink-500 p-3 border-transparent shadow-lg rounded-md border header-button"
                  : "text-gray-700 hover:text-pink-500"
              }`}
            >
              {tab}
            </button>
          )
        )}
      </div>
      {renderContent()}
    </div>
  );
};

export default Resume;
