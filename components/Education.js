import React from "react";

const Education = props => {
  let courses = props.data.courses.map((course, i) => {
    return <li>{course}</li>;
  });
  return (
    <div>
      <h2>{props.data.institution}</h2>
      <h2>
        {props.data.studyType} - {props.data.area}
      </h2>
      <h4>
        {props.data.startDate} - {props.data.endDate}
      </h4>
      <p>{props.data.gpa}</p>
      {courses}
      <style jsx>{``}</style>
    </div>
  );
};

export default Education;
