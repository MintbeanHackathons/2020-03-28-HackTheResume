import React from "react";
import Title from "../Title";
import Info from "../Info";
import Profiles from "./Profiles";
import Jobs from "./Jobs";

import "./Sections.css";

export default function Work(props) {
  let counter = 0;
  const jobs = props.data.map(job => {
    counter++;
    return (
      <Jobs
        company={job.company}
        position={job.position}
        website={job.website}
        startDate={job.startDate}
        endDate={job.endDate}
        summary={job.summary}
        key={counter}
      />
    );
  });

  return (
    <>
      <div className="section">
        <Title name={props.title} />
        <div className="section-body">{jobs}</div>
      </div>
    </>
  );
}
