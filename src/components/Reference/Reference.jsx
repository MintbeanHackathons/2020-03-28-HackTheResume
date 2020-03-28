import React from "react";
import "./Reference.css";

function Reference(props) {
  return (
    <div className="Reference">
      <span className="name">{props.name}</span>
      <span className="reference">{props.reference}</span>
    </div>
  );
}

export default Reference;
