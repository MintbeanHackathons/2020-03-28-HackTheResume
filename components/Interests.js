import React from "react";

const Interests = props => {
  let keywords = props.data.keywords.map((keyword, i) => {
    return <li key={i}>{keyword} </li>;
  });
  return (
    <div>
      <h3>{props.data.name}</h3>
      {keywords}
      <style jsx>{`
        div {
          background: #70e4ef;
          padding: 20px;
          border: 3px solid black;
          margin: 20px auto;
        }
      `}</style>
    </div>
  );
};

export default Interests;
