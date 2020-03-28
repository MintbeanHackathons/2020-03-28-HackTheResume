import React from "react";
import "./Skill.css";

function Skill(props) {
  return (
    <div className="Skill">
      <span className="name">{props.name}</span>
      <span className="level">{props.level}</span>
      {props.keywords.length &&
        <>
          <h3>Keywords</h3>
          <ul className="keywords">
            {props.keywords.map((keyword, index) => {
              return <li key={index}>{keyword}</li>
            })}
          </ul>
        </>
      }
    </div>
  );
}

export default Skill;
