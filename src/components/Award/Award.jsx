import React from "react";
import "./Award.css";

function Award(props) {
  return (
    <div className="Award">
      <span className="title">{props.title}</span>
      <span className="date">{props.date}</span>
      <span className="awarder">{props.awarder}</span>
      <span className="summary">{props.summary}</span>
    </div>
  );
}

export default Award;
