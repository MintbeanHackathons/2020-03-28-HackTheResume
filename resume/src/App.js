import React from "react";
import Section from "./components/section";
import resumeJSON from "./data/resume";

import "./App.css";

function App() {
  const sections = Object.keys(resumeJSON).map(section => {
    return <Section title={section} info={resumeJSON[section]} />;
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>Resume</p>
        <section>{sections}</section>
      </header>
    </div>
  );
}

export default App;
