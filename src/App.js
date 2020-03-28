import React from 'react';
import './App.css';

import resumeJSON from "./data/resume"
import { generateResume } from "./schemaModels/process"

import Introduction from "./components/Introduction"

function App() {
  const resume = generateResume(resumeJSON)

  return (
    <div className="App">
      <Introduction basics={resume.basics} />
    </div>
  );
}

export default App;
