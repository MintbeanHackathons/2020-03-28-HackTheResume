import React from "react";
import Section from "./components/Section";
import resumeJSON from "./data/resume";
import Basics from "./components/sections/Basics";

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
        {/* <section>{sections}</section> */}
        <Basics title="Basics" data={resumeJSON.basics} />
      </header>
    </div>
  );
}

export default App;
