import React from "react";
import myField from "./ResumeField.scss";

export default function ResumeField(props) {

  

  return (
    <li className={myField}>
      {props.name}{<br></br>}
      {props.label}{<br></br>}
      {props.email}{<br></br>}
      {props.website}
    </li>
  )
}