import React from "react";

const Awards = ({ awards }) => {
  return (
    <div className="awards sidebar-section">
      <h2>Awards</h2>
      {awards.map((item, i) => (
        <p className="award" key={i}>
          {item.title} ({item.awarder}, {item.date})
          <br />
          {item.summary ? item.summary : null}
        </p>
      ))}
    </div>
  );
};

export default Awards;
