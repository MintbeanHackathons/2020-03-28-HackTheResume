import React from 'react';
import './styles/App.css';
import resume from './resume/seed'
import Basics from './components/Basics'

function App() {
  let myResume = resume

  return (
    <div className="App">
      <Basics basics={myResume.basics}/>
    </div>
  );
}

export default App;
