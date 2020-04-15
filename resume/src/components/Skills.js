import React from "react";

const Skills = ({skills}) => {
  return (
    <div className="skills sidebar-section">
      <h2>Skills</h2>
      {skills.map((skill) => (
        <p className="skill-category" key={skill.name}>
          <span className="bold">{skill.name}: </span>
          <br />
          {skill.keywords.join(", ")}
        </p>
      ))}
    </div>
  );
};

export default Skills;
