import React from "react";
import "./Experience.css";

function Experience(props) {
  const type = props.type;
  // work and volunteer experience objects are the same other than the company/organization property
  const place = type === "work" ? "company" : "organization";
  const experience = props.experience;
  return (
    <div className="Experience">
      <span className={place}>{experience[place]}</span>
      <span className="position">{experience.position}</span>
      <span className="website">{experience.website}</span>
      <span className="start-date">{experience.startDate}</span>
      <span className="end-date">{experience.endDate}</span>
      <span className="summary">{experience.summary}</span>
      {experience.highlights.length &&
        <>
          <h3>Highlights</h3>
          <ul className="highlights">
            {experience.highlights.map(highlight => {
              return <li>{highlight}</li>
            })}
          </ul>
        </>
      }
    </div>
  );
}

export default Experience;
