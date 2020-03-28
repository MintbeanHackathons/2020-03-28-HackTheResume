import React, { Component } from "react";
import styled from "styled-components";

import resumeData from "../resume.json";

export default class Summary extends Component {
  render() {
    return (
      <section>
        <h2>Summary</h2>
        <p>{resumeData.basics.summary}</p>
      </section>
    );
  }
}
