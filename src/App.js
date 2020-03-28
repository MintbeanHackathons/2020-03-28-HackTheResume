import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import data from './data/resume.json';

function BuildBasicsElement(basics) {
  /*
    todo: Elements in basic info remaining below.
    For profiles, would have considered creating a for loop
    to get through each profile.
    "profiles": [{
      "network": "Twitter",
      "username": "john",
      "url": "http://twitter.com/john"
    }]
  */
  const { location } = basics;
  return (
    <div className="App" align="left">
      <h1>{basics.name}</h1>
      <h3>{basics.label}</h3>
      <h5>
        {basics.location.address} {location.postalCode} {location.city} {location.region} {location.country}
        <br></br>
        {basics.phone}
        <br></br>
        {basics.email}
        <br></br>
        {basics.website}</h5>
      <hr></hr>
      <p className="header-summary">{basics.summary}</p>
    </div>
  );
}

function BuildWorkElement(work) {
  return (
    <header className="App-header">
      <br></br>Welcome to my React Web Application
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

function BuildVolunteerElement(basics) {
  return;
}

function BuildEducationElement(basics) {
  return;
}

function App() {

  // Pass Resume JSON basics to build basic information.
  const basics = data.basics;
  // Work | Volunteer | Education
  // todo: Did not get to continue onto work/volunteer/education for the JSON parsing.
  const work = data.work ? data.work : {};
  const volunteer = data.volunteer ? data.volunteer : {};
  const education = data.education ? data.education : {};

  return (
    <div>
      <BuildBasicsElement name={basics.name} label={basics.label} phone={basics.phone}
      email={basics.email} website={basics.website} summary={basics.summary} location={basics.location}/>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
