import React from "react";
import "./Experience.css";

import helper from "../../helper";

function Experience(props) {
  const type = props.type;
  // work and volunteer experience objects are the same other than the company/organization property
  const place = type === "work" ? "company" : "organization";
  const experience = props.experience;
  const startDate = helper.formatDate(experience.startDate);
  const endDate = helper.formatDate(experience.endDate);
  return (
    <div className="Experience">
      <span className={place}>{experience[place]}</span>
      <span className="position">{experience.position}</span>
      <span className="website"><i class="fas fa-globe"></i> <a href={experience.website}>{experience.website}</a></span>
      <span className="period">{startDate} to {endDate}</span>
      <h3>Summary</h3>
      <span className="summary">{experience.summary}</span>
      {experience.highlights.length &&
        <>
          <h3>Highlights</h3>
          <ul className="highlights">
            {experience.highlights.map((highlight, index) => {
              return <li key={index}>{highlight}</li>
            })}
          </ul>
        </>
      }
    </div>
  );
}

export default Experience;
