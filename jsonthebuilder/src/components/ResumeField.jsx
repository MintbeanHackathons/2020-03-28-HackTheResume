import React from "react";
import "./ResumeField.scss";
var classnames = require('classnames');

export default function ResumeField(props) {

  const myField = classnames

  return (
    <li className={myField}>
      {props.name}{<br></br>}
      {props.label}{<br></br>}
      {props.email}{<br></br>}
    </li>
  )
}