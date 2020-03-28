import React from "react";
import "./Award.css";

import helper from "../../helper";

function Award(props) {
  const awardDate = helper.formatDate(props.date);
  return (
    <div className="Award">
      <span className="title">{props.title}</span>
      <span className="date">{awardDate}</span>
      <span className="awarder">Awarded by {props.awarder}</span>
      <span className="summary">{props.summary}</span>
    </div>
  );
}

export default Award;
