import React from "react";
import EducationCard from "./EducationCard";
import { data1 } from "../Data";
import '../App.css'

const Experience = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="text-center mb-8">
        <p className="text-center text-[16px] text-pink-600 uppercase">Over 10 years of Experience</p>
        <h1 className="text-center text-[30px] font-bold text-gray-700 sm:text-[60px]"> My Experience</h1>
      </div>
      <div className="space-y-8">
        {data1.map((edu, index) => (
          <EducationCard
            key={index}
            image={edu.image}
            date={edu.date}
            title={edu.title}
            role={edu.role}
            description={edu.description}
          />
        ))}
      </div>
    </div>
  
  );
};

export default Experience