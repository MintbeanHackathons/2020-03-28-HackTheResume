import React from "react";
import Section from "./components/section";
import resumeJSON from "./data/resume";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Resume</p>
        <Section />
      </header>
    </div>
  );
}

export default App;
