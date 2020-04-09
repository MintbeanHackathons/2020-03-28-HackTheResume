import React from "react";

import ResumeHeader from "./components/ResumeHeader";
import ResumeSidebar from "./components/ResumeSidebar";
import ResumeMain from "./components/ResumeMain";
import ResumeFooter from "./components/ResumeFooter";
import data from "./data/data.json";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ResumeHeader 
        basics={data.basics} 
      />
      <div className="middle-container">
        <ResumeSidebar 
          basics={data.basics} 
          skills={data.skills} 
          awards={data.awards}
        />
        <ResumeMain
          work={data.work}
          volunteer={data.volunteer}
          education={data.education}
        />
      </div>
      <ResumeFooter
        publications={data.publications}
        languages={data.languages}
        interests={data.interests}
        references={data.references}
      />
    </div>
  );
}

export default App;
