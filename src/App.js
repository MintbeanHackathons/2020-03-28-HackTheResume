import React from 'react';
import './App.css';
import DataEntry from './DataEntry';
import Resume from './Resume';

import resume from './resume.json';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <header className="App-header">
    <Switch>
      <Route exact path="/">
        <DataEntry resume={resume} />
      </Route>
      <Route path="/resume" component={(props)=><Resume {...props} />}/>     
    </Switch>
    </header>
    </div>
    </Router>
  );
}

export default App;
