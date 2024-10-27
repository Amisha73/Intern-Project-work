import React from "react";
import Main from "./Main";
import Experience from "./Experience";
import Education from "./Education";
import Resume from "./Resume";
import Blog from "./Blog";

const Home = () => {
  return (
    <div className=" p-16  bg-gray-50">
      <Main />
      <div className="border-t border-gray-300 mt-10"></div>
      <Experience />
      <div className="border-t border-gray-300 mt-20"></div>
      <div className="App flex justify-center items-center min-h-screen">
      <Education />
    </div>
      <div className="border-t border-gray-300 mt-20"></div>
      <Resume />
      <div className="border-t border-gray-300 "></div>
      <div className="flex justify-center items-center min-h-screen">
        <Blog />
      </div>
      {/* <div className="border-t border-gray-300 "></div> */}
    </div>
  );
};

export default Home;
