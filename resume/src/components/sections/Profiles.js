import React from "react";

export default function Profiles(props) {
  return (
    <>
      <div>{props.network}</div>
      <a href={props.url}>
        <div>{props.username}</div>
      </a>
    </>
  );
}
