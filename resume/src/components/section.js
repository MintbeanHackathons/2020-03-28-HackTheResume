import React from "react";
import resumeJSON from "../data/resume";

export default function Section(props) {
  return (
    <>
      <div className="section">{resumeJSON.basics.name}</div>
    </>
  );
}
