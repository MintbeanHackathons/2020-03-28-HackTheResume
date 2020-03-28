import React from 'react';
import './styles/App.css';
import resume from './resume/seed'
import Basics from './components/Basics'
import Body from './components/Body'

function App() {
  let myResume = resume

  return (
    <div className="App">
      <Basics basics={myResume.basics}/>
      <Body data={myResume}/>
    </div>
  );
}

export default App;
