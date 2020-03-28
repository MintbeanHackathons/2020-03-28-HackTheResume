import React from "react";

export default function Jobs(props) {
  return (
    <>
      <div>{props.company}</div>
      <div>{props.position}</div>
      <div>{props.website}</div>
      <div>{props.startDate}</div>
      <div>{props.endDate}</div>
      <div>{props.summary}</div>
      <div>{props.company}</div>
    </>
  );
}
