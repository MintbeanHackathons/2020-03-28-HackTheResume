import React from "react";
import "./Interest.css";

function Interest(props) {
  return (
    <div className="Interest">
      <span className="name">{props.name}</span>
      {props.keywords.length &&
          <div className="keywords">
            {props.keywords.map((keyword, index) => {
              return <span class="keyword" key={index}><i>#{keyword}</i>&nbsp;</span>
            })}
          </div>
      }
    </div>
  );
}

export default Interest;
