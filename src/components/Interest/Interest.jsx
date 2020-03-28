import React from "react";
import "./Interest.css";

function Interest(props) {
  return (
    <div className="Interest">
      <span className="name">{props.name}</span>
      {props.keywords.length &&
        <>
          <ul className="keywords">
            {props.keywords.map(keyword => {
              return <li>{keyword}</li>
            })}
          </ul>
        </>
      }
    </div>
  );
}

export default Interest;
