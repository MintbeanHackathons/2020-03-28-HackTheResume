import React, { Component } from "react";
import styled from "styled-components";

import resumeData from "../resume.json";

export default class Projects extends Component {
  render() {
    const projects = resumeData.publications;

    return (
      <section>
        <h2>Projects</h2>
        {projects.map(project => {
          return (
            <article>
              <h3>{project.name}</h3>
              <a href={project.website}>{project.website}</a>
              <p>{project.summary}</p>
            </article>
          );
        })}
      </section>
    );
  }
}
