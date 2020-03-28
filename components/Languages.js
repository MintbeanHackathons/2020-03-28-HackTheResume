import React from "react";

const Languages = props => {
  return (
    <div>
      <h3>
        {props.data.language} - {props.data.fluency}
      </h3>
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

export default Languages;
