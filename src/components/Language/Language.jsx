import React from "react";
import "./Language.css";

function Language(props) {
  return (
    <div className="Language">
      <span className="language">{props.language}</span>
      <span className="fluency">{props.fluency}</span>
    </div>
  );
}

export default Language;
