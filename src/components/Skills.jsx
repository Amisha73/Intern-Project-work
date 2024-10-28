import React from "react";
import "../App.css";

const Skills = () => {
  const skillsData = {
    Design: [
      { name: "Photoshop", level: 100 },
      { name: "Figma", level: 95 },
      { name: "Adobe XD", level: 60 },
      { name: "Adobe Illustrator", level: 70 },
      { name: "Design", level: 90 },
    ],
    Development: [
      { name: "HTML", level: 85 },
      { name: "CSS", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "Software", level: 75 },
      { name: "Plugin", level: 70 },
    ],
  };

  const renderSkillBars = (skills) => {
    return skills.map((skill) => (
      <div key={skill.name} className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-semibold">
            {skill.name.toUpperCase()}
          </span>
          <span className="text-sm font-semibold">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2">
          <div
            className=" rounded-full skillsLevel "
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    ));
  };

  return (
    <div className="p-6 mx-auto max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-[14px] font-semibold text-pink-500 mb-4">
            Features
          </h2>
          <h3 className="text-2xl font-bold mb-6">Design Skill</h3>
          {renderSkillBars(skillsData.Design)}
        </div>

        <div>
          <h2 className="text-[14px] font-semibold text-pink-500 mb-4">
            Features
          </h2>
          <h3 className="text-2xl font-bold mb-6">Development Skill</h3>
          {renderSkillBars(skillsData.Development)}
        </div>
      </div>
    </div>
  );
};

export default Skills;
