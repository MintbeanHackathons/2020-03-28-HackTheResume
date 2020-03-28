import React from 'react';
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
  return (
    <main className="App">
      <h1>{resumeData.basics.name}</h1>
      <span className="label">{resumeData.basics.label}</span>
      <img src={resumeData.basics.picture} />
      <section className="contact-info">
        <h2>Contact Info</h2>
        <span className="email"><i class="far fa-envelope"></i> {resumeData.basics.email}</span>
        <span className="phone"><i class="fas fa-phone"></i> {resumeData.basics.phone}</span>
        <span className="website">
          <i class="fas fa-home"></i> <a href={resumeData.basics.website}>{resumeData.basics.website}</a>
        </span>
        <div className="location">
          <h3><i class="fas fa-map-marker"></i> Location</h3>
          <span className="address">{resumeData.basics.location.address}</span>
          <span className="postal-code">{resumeData.basics.location.postalCode}</span>
          <span className="city">{resumeData.basics.location.city}</span>
          <span className="country-code">{resumeData.basics.location.countryCode}</span>
          <span className="region">{resumeData.basics.location.region}</span>
        </div>
        <div className="profiles">
          <h3><i class="far fa-user"></i> Profiles</h3>
          {resumeData.basics.profiles.length ?
            resumeData.basics.profiles.map((profile, index) => {
              return <a key={index} href={profile.url}>{profile.network} @{profile.username}</a>
            })
            : ""
          }
        </div>
      </section>
      <section className="work">
        <h2><i class="fas fa-briefcase"></i> Work</h2>
        {resumeData.work.map((experience, index) => {
          return <Experience key={index} type="work" experience={experience} />
        })}
      </section>
      <section className="volunteer">
        <h2><i class="fas fa-hands-helping"></i> Volunteer</h2>
        {resumeData.volunteer.map((experience, index) => {
          return <Experience key={index} type="volunteer" experience={experience} />
        })}
      </section>
      <section className="education">
        <h2><i class="fas fa-university"></i> Education</h2>
        {resumeData.education.map((study, index) => {
          return <Study key={index} {...study} />
        })}
      </section>
      {resumeData.awards.length &&
        <section className="awards">
          <h2><i class="fas fa-trophy"></i> Awards</h2>
          {resumeData.awards.map((award, index) => {
            return <Award key={index} {...award} />
          })}
        </section>
      }
      {resumeData.skills.length &&
        <section className="skills">
          <h2><i class="fas fa-code"></i> Skills</h2>
          {resumeData.skills.map((skill, index) => {
            return <Skill key={index} {...skill} />
          })}
        </section>
      }
      {resumeData.languages.length &&
        <section className="languages">
          <h2><i class="fas fa-language"></i> Languages</h2>
          {resumeData.languages.map((language, index) => {
            return <Language key={index} {...language} />
          })}
        </section>
      }
      {resumeData.interests.length &&
        <section className="interests">
          <h2><i class="far fa-heart"></i> Interests</h2>
          {resumeData.interests.map((interest, index) => {
            return <Interest key={index} {...interest} />
          })}
        </section>
      }
      {resumeData.references.length &&
        <section className="references">
          <h2><i class="fas fa-user-friends"></i> References</h2>
          {resumeData.references.map((reference, index) => {
            return <Reference key={index} {...reference} />
          })}
        </section>
      }
    </main>
  );
}

export default App;
