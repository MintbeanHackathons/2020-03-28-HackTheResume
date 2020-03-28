import React from "react";

const Publications = props => {
  return (
    <div>
      <h3>
        <a href={props.data.website}>{props.data.name}</a> -{" "}
        {props.data.website}
      </h3>
      <h3>{props.data.publisher}</h3>
      <h4>{props.data.releaseDate}</h4>
      <p>{props.data.summary}</p>
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

export default Publications;
