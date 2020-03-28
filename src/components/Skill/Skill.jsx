import React from "react";
import "./Skill.css";

function Skill(props) {
  return (
    <div className="Skill">
      <span className="name">{props.name}</span>
      <span className="level">Level: {props.level}</span>
      {props.keywords.length &&
          <div className="keywords">
            {props.keywords.map((keyword, index) => {
              return <span className="keyword" key={index}><i>#{keyword}</i>&nbsp;</span>
            })}
          </div>
      }
    </div>
  );
}

export default Skill;
