import React from "react";

const References = props => {
  return (
    <div>
      <h3>{props.data.name}</h3>
      <p>{props.data.reference}</p>
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

export default References;
