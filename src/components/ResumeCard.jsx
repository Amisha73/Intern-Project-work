import React from "react";
import { data2,data3 } from "../Data";

const ResumeCard = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-11 lg:px-20 px-5 ">
      <div className="flex-1 mb-8">
        <p className="text-[14px] mb-2 text-pink-600">2007 - 2010</p>
        <h2 className="text-3xl lg:text-xl font-semibold mb-4">
          Education Quality
        </h2>
        {data2.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-5 mb-8 rounded-lg shadow-lg resumeColor group"
          >
            <div className="flex justify-between flex-wrap space-y-2">
              <div>
                <h3 className="text-[18px] text-gray-800 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-[10px] group-hover:text-white">
                  {item.institution}
                </p>
              </div>
              <div>
                <button className="text-pink-500 group-hover:text-white group-hover:bg-red-500 bg-white resumeColor p-1 border-transparent drop-shadow-lg rounded-md border">
                  {item.rating}
                </button>
              </div>
            </div>
            <div className="border-t border-gray-300 mt-4 mb-4"></div>
            <p className="text-gray-600 text-[14px] group-hover:text-white">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex-1 mb-8">
        <p className="text-[14px] mb-2 text-pink-600">2007 - 2010</p>
        <h2 className="text-3xl lg:text-xl font-semibold mb-4">
          Job Experience
        </h2>
        {data3.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-5 mb-8 rounded-lg shadow-lg resumeColor group"
          >
            <div className="flex justify-between flex-wrap space-y-2">
              <div>
                <h3 className="text-[18px] text-gray-800 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-[10px] group-hover:text-white">
                  {item.institution}
                </p>
              </div>
              <div>
                <button className="text-pink-500 group-hover:text-white group-hover:bg-red-500 bg-white resumeColor p-1 border-transparent drop-shadow-lg rounded-md border">
                  {item.rating}
                </button>
              </div>
            </div>
            <div className="border-t border-gray-300 mt-4 mb-4"></div>
            <p className="text-gray-600 text-[14px] group-hover:text-white">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeCard;
