import React from "react";
import styled from "styled-components";
import resumeData from "./resume.json";

import Header from "./components/Header";
import Education from "./components/Education";
import Summary from "./components/Summary";
import Projects from "./components/Projects";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Header />
      <main>
        <div>
          <Education />
          <Summary />
        </div>
        <Projects />
        <Work />
      </main>
    </div>
  );
}

export default App;
