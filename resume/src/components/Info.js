import React from "react";

export default function Info(props) {
  let counter = 0;
  const sections = Object.keys(props.data).map(section => {
    counter++;
    return (
      <>
        <div>{section}</div>
        <div>{props.data[section]} </div>
      </>
    );
  });
  return (
    <>
      <div>{sections}</div>
    </>
  );
}
