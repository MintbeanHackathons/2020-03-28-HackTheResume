import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataEntry from './DataEntry';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <header className="App-header">
    
        
       
    
    <Switch>
      <Route exact path="/">
        <DataEntry />
      </Route>
    </Switch>
    </header>
    </div>
    </Router>
  );
}

export default App;
