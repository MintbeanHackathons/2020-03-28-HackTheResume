import React from "react";
import Title from "./Title";
import Info from "./Info";

export default function Section(props) {
  return (
    <>
      <div className="section">{props.title}</div>
    </>
  );
}
