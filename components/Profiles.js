import React from "react";

const Profiles = props => {
  return (
    <div>
      <h4>
        {props.data.network}: {props.data.username} - {props.data.url}
      </h4>
      <style jsx>{``}</style>
    </div>
  );
};

export default Profiles;
