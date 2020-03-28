import React from "react";

const Education = props => {
  let courses = props.data.courses.map((course, i) => {
    return <li key={i}>{course}</li>;
  });
  return (
    <div>
      <h3>{props.data.institution}</h3>
      <h3>
        {props.data.studyType} - {props.data.area}
      </h3>
      <h4>
        {props.data.startDate} - {props.data.endDate}
      </h4>
      <p>{props.data.gpa}</p>
      <p>Courses:</p>
      {courses}
      <style jsx>{`
        div {
          background: #70e4ef;
          padding: 20px;
          border: 3px solid black;
          margin: 20px auto;
        }
      `}</style>
    </div>
  );
};

export default Education;
