import React from "react";

const Awards = props => {
  return (
    <div>
      <h4>
        {props.data.title} - {props.data.date}
      </h4>
      <h5>{props.data.company}</h5>
      <p>{props.data.summary}</p>
      <style jsx>{``}</style>
    </div>
  );
};

export default Awards;
