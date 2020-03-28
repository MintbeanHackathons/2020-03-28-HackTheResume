import React from "react";
import Section from "./components/Section";
import resumeJSON from "./data/resume";

import "./App.css";

function App() {
  let counter = 0;
  const sections = Object.keys(resumeJSON).map(section => {
    counter++;
    return <Section title={section} info={resumeJSON[section]} key={counter} />;
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
