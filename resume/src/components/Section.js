import React from "react";
import Title from "./Title";
import Info from "./Info";

export default function Section(props) {
  return (
    <>
      <Title name={props.title} />
      <Info data={props.info} />
    </>
  );
}
