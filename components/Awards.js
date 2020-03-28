import React from "react";

const Awards = props => {
  return (
    <div>
      <h3>
        {props.data.title} - {props.data.date}
      </h3>
      <h4>{props.data.awarder}</h4>
      <p>{props.data.summary}</p>
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

export default Awards;
