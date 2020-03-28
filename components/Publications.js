import React from "react";

const Publications = props => {
  return (
    <div>
      <h2>
        <a href={props.data.website}>{props.data.name}</a> -{" "}
        {props.data.website}
      </h2>
      <h2>{props.data.publisher}</h2>
      <h4>{props.data.releaseDate}</h4>
      <p>{props.data.summary}</p>
      <style jsx>{``}</style>
    </div>
  );
};

export default Publications;
