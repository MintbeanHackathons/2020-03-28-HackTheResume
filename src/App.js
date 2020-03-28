import React from 'react';
import './App.css';

import resumeJSON from "./data/resume"
import { generateResume } from "./schemaModels/process"

import Introduction from "./components/Introduction"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Volunteer from "./components/Volunteer"

import Divider from "./components/shared/Divider"

function App() {
  const resume = generateResume(resumeJSON)

  return (
    <div className="App">
      <div className="resumeContainer">
        <Introduction basics={resume.basics} />
        <Divider />
        <Experience work={resume.work} />
        <Divider />
        <Education />
        <Divider />
        <Volunteer />
        <Divider />
      </div>
    </div>
  );
}

export default App;
