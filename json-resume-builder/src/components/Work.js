import React, { Component } from "react";
import styled from "styled-components";

import resumeData from "../resume.json";

export default class Work extends Component {
  render() {
    const work = resumeData.work;
    return (
      <section>
        {work.map(work => {
          return (
            <article>
              <h2>{work.company}</h2>
              <h3>{work.position}</h3>
              <h4>
                {work.startDate} to {work.endDate}
              </h4>
              <ul>
                {work.highlights.map(summary => {
                  return <li>{summary}</li>;
                })}
              </ul>
            </article>
          );
        })}
      </section>
    );
  }
}
