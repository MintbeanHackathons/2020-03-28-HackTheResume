import React, { useState, useEffect } from 'react';
import './App.css';
import resumeJson from './assets/resume.json';

import Experience from "./components/Experience/Experience";
import Study from "./components/Study/Study";
import Award from "./components/Award/Award";
import Skill from "./components/Skill/Skill";
import Language from "./components/Language/Language";
import Interest from "./components/Interest/Interest";
import Reference from "./components/Reference/Reference";

function App() {
  const resumeData = resumeJson;
  console.log(resumeData);
  return (
    <main className="App">
      <h1>{resumeData.basics.name}</h1>
      <span>{resumeData.basics.label}</span>
      <img src={resumeData.basics.picture} />
      <section className="contact-info">
        <span className="email">{resumeData.basics.email}</span>
        <span className="phone">{resumeData.basics.phone}</span>
        <span className="website">
          <a href={resumeData.basics.website}>{resumeData.basics.website}</a>
        </span>
        <div className="location">
          <span className="address">{resumeData.basics.location.address}</span>
          <span className="postal-code">{resumeData.basics.location.postalCode}</span>
          <span className="city">{resumeData.basics.location.city}</span>
          <span className="country-code">{resumeData.basics.location.countryCode}</span>
          <span className="region">{resumeData.basics.location.region}</span>
        </div>
        <div className="profiles">
          {resumeData.basics.profiles.length ?
            resumeData.basics.profiles.map(profile => {
              return <a href={profile.url}>{profile.network} @{profile.username}</a>
            })
            : ""
          }
        </div>
      </section>
      <section className="work">
        {resumeData.work.map(experience => {
          return <Experience type="work" experience={experience} />
        })}
      </section>
      <section className="volunteer">
        {resumeData.volunteer.map(experience => {
          return <Experience type="volunteer" experience={experience} />
        })}
      </section>
      <section className="education">
        {resumeData.education.map(study => {
          return <Study {...study} />
        })}
      </section>
      {resumeData.awards.length &&
        <section className="awards">
          {resumeData.awards.map(award => {
            return <Award {...award} />
          })}
        </section>
      }
      {resumeData.skills.length &&
        <section className="skills">
          {resumeData.skills.map(skill => {
            return <Skill {...skill} />
          })}
        </section>
      }
      {resumeData.languages.length &&
        <section className="languages">
          {resumeData.languages.map(language => {
            return <Language {...language} />
          })}
        </section>
      }
      {resumeData.interests.length &&
        <section className="interests">
          {resumeData.interests.map(interest => {
            return <Interest {...interest} />
          })}
        </section>
      }
      {resumeData.references.length &&
        <section className="references">
          {resumeData.references.map(reference => {
            return <Reference {...reference} />
          })}
        </section>
      }
    </main>
  );
}

export default App;
