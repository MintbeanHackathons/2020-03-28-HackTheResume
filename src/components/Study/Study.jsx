import React from "react";
import "./Study.css";

function Study(props) {
  return (
    <div className="Study">
      <span className="institution">{props.institution}</span>
      <span className="area">{props.area}</span>
      <span className="studyType">{props.studyType}</span>
      <span className="start-date">{props.startDate}</span>
      <span className="end-date">{props.endDate}</span>
      <span className="gpa">{props.gpa}</span>
      {props.courses.length &&
        <ul className="courses">
          {props.courses.map(course => {
            return <li>{course}</li>
          })}
        </ul>
      }
    </div>
  );
}

export default Study;
