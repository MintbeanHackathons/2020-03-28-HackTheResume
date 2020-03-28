import React from "react";

const References = props => {
  return (
    <div>
      <h2>{props.data.name}</h2>
      <p>{props.data.reference}</p>
      <style jsx>{``}</style>
    </div>
  );
};

export default References;
