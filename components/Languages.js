import React from "react";

const Languages = props => {
  return (
    <div>
      <h2>
        {props.data.language} - {props.data.fluency}
      </h2>
      <style jsx>{``}</style>
    </div>
  );
};

export default Languages;
