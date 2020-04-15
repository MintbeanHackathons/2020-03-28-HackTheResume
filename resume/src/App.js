import React from "react";

import ResumeHeader from "./components/ResumeHeader";
import ResumeSidebar from "./components/ResumeSidebar";
import ResumeMain from "./components/ResumeMain";
import ResumeFooter from "./components/ResumeFooter";
import data from "./data/data.json";
import pdf from "./icons/pdf.png"

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="pdf-bar">
        <a href="https://drive.google.com/file/d/1QhcTiwjI-Enx9nyG-R-jCxcdGZWhT_IX/view" target="blank">
          Download a PDF Version of this Resume 
          <img className="pdf-icon" src={pdf}/>
        </a>
      </div>
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
      <div className="icon-attribution">
        Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a>, <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> and <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </div>
    </div>
  );
}

export default App;
