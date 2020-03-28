import React from "react";

const Interests = props => {
  let keywords = props.data.keywords.map((keyword, i) => {
    return <li key={i}>{keyword} </li>;
  });
  return (
    <div>
      <h2>{props.data.name}</h2>
      {keywords}
      <style jsx>{``}</style>
    </div>
  );
};

export default Interests;
