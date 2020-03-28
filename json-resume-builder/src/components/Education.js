import React, { Component } from "react";
import styled from "styled-components";

import resumeData from "../resume.json";

export default class Education extends Component {
  render() {
    const educationData = resumeData.education;
    return (
      <section>
        <h2>EDUCATION</h2>
        {educationData.map(education => {
          return (
            <div>
              <span>{education.institution}</span>
              <span>
                {education.startDate} to {education.endDate}
              </span>
              <p>{education.area}</p>
            </div>
          );
        })}
      </section>
    );
  }
}
