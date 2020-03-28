import React from 'react';
import './App.css';
import Resume from './components/Resume'
import applicant from './resume/applicant'
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <>
        <Resume applicant={applicant} />
        </>
      {/* </header> */}
    </div>
  );
}

export default App;
