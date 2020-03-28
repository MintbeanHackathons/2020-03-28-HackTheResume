import React, { Component } from 'react';
import './App.css';
import resume from './files/resume'
import Basics from './components/Basics'
import Work from './components/Work'
import Volunteer from './components/Volunteer'
import Education from './components/Education'
import Awards from './components/Awards'
import Publications from './components/Publications'
import Skills from './components/Skills'
import Languages from './components/Languages'
import Interests from './components/Interests'
import References from './components/References'

class App extends Component {
  constructor(){
    super()
    this.state = {
      resume: resume
    }
  }
  render(){
    return (
      <div className="content-body">
        <Basics data={resume.basics} />
        <hr/>
        <h2>Work History</h2>
        {resume.work.map((el, i) => {
          return <Work data={el} key={i}/>
        })}
        <hr/>
        <h2>Volunteer History</h2>
        {resume.volunteer.map((el, i) => {
          return <Volunteer data={el} key={i}/>
        })}
        <hr/>
        <h2>Education</h2>
        {resume.education.map((el, i) => {
          return <Education data={el} key={i}/>
        })}
        <hr/>
        <h2>Awards</h2>
        {resume.awards.map((el, i) => {
          return <Awards data={el} key={i}/>
        })}
        <hr/>
        <h2>Publications</h2>
        {resume.publications.map((el, i) => {
          return <Publications data={el} key={i}/>
        })}
        <hr/>
        <h2>Skills</h2>
        {resume.skills.map((el, i) => {
          return <Skills data={el} key={i}/>
        })}
        <hr/>
        <h2>Languages</h2>
        {resume.languages.map((el, i) => {
          return <Languages data={el} key={i}/>
        })}
        <hr/>
        <h2>Interests</h2>
        {resume.interests.map((el, i) => {
          return <Interests data={el} key={i}/>
        })}
        <hr/>
        <h2>References</h2>
        {resume.references.map((el, i) => {
          return <References data={el} key={i}/>
        })}
      </div>
    );
  }
}

export default App;
