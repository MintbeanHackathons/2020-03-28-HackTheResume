import React from "react";
import "./Study.css";

import helper from "../../helper";

function Study(props) {
  const startDate = helper.formatDate(props.startDate);
  const endDate = helper.formatDate(props.endDate);
  return (
    <div className="Study">
      <span className="institution">{props.institution}</span>
      <span className="area">Area: {props.area}</span>
      <span className="studyType">Type: {props.studyType}</span>
      <span className="period">{startDate} to {endDate}</span>
      <span className="gpa">GPA: <b>{props.gpa}</b></span>
      {props.courses.length &&
        <>
          <h3>Courses</h3>
          <ul className="courses">
            {props.courses.map((course, index) => {
              return <li key={index}>{course}</li>
            })}
          </ul>
        </>
      }
    </div>
  );
}

export default Study;
