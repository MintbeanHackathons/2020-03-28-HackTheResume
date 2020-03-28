import React from "react";
import "./Publication.css";

function Publication(props) {
  return (
    <div className="Publication">
      <span className="name">{props.name}</span>
      <span className="publisher">{props.publisher}</span>
      <span className="release-date">{props.releaseDate}</span>
      <span className="website">{props.website}</span>
      <span className="summary">{props.summary}</span>
    </div>
  );
}

export default Publication;
