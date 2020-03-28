import React from "react";

const Skills = props => {
  let keywords = props.data.keywords.map((keyword, i) => {
    return <li key={i}>{keyword} </li>;
  });
  return (
    <div>
      <h2>
        {props.data.name} - {props.data.level}
      </h2>
      {keywords}
      <style jsx>{``}</style>
    </div>
  );
};

export default Skills;
