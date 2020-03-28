import React from "react";

const Work = props => {
  let highlights = props.data.highlights.map((highlight, i) => {
    return <li>{highlight}</li>;
  });
  return (
    <div>
      <h2>
        <a href={props.data.website}>{props.data.company}</a> -{" "}
        {props.data.website}
      </h2>
      <h2>{props.data.position}</h2>
      <h4>
        {props.data.startDate} - {props.data.endDate}
      </h4>
      <p>{props.data.summary}</p>
      {highlights}
      <style jsx>{``}</style>
    </div>
  );
};

export default Work;
