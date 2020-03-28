import React from "react";

const Volunteer = props => {
  let highlights = props.data.highlights.map((highlight, i) => {
    return <li key={i}>{highlight}</li>;
  });
  return (
    <div>
      <h3>
        <a href={props.data.website}>{props.data.organization}</a> -{" "}
        {props.data.website}
      </h3>
      <h3>{props.data.position}</h3>
      <h4>
        {props.data.startDate} - {props.data.endDate}
      </h4>
      <p>{props.data.summary}</p>
      <p>Highlights:</p>
      {highlights}
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

export default Volunteer;
