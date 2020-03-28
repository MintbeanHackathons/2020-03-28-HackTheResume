import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';
import data from './data/data.json';

function App() {
  return (
    <div className="App">
      <Header
        basics={data.basics}
      />
      <div className="middle-container">
        <Sidebar
          basics={data.basics}
          skills={data.skills}
        />
        <Main
          work={data.work}
          volunteer={data.volunteer}
          education={data.education}
        />
      </div>
      <Footer
        awards={data.awards}
        publications={data.publications}
        languages={data.languages}
        interests={data.interests}
        references={data.references}
      />
    </div>
  );
}

export default App;
