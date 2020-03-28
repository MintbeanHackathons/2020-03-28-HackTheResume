import React from "react";

const Profiles = props => {
  return (
    <div>
      <h4>
        {props.data.network}: {props.data.username} -{" "}
        <a href={props.data.url}>{props.data.url}</a>
      </h4>
      <style jsx>{`
        h4 {
          width: 50vw;
          text-align: center;
          margin: auto;
        }
      `}</style>
    </div>
  );
};

export default Profiles;
