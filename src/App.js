import React from 'react';
import resume from './data/resume.json';

import { Awards, Basics, Interests, Languages, Publications, References, Skills, Experience } from './components';

import './App.scss';

function App() {
  return (
    <div className="App">
      {resume.basics && <Basics data={resume.basics} />}
      {resume.work && <Experience data={resume.work} type='work' orgType='company' title='Work Experience' />}
      {resume.volunteer && <Experience data={resume.volunteer} type='volunteer' orgType='organization' title='Volunteer' />}
      {resume.education && <Experience data={resume.education} type='education' orgType='institution' title='Education' />}
      {resume.awards && <Awards data={resume.awards} />}
      {resume.publications && <Publications data={resume.publications} />}
      {resume.skills && <Skills data={resume.skills} />}
      {resume.languages && <Languages data={resume.languages} />}
      {resume.interests && <Interests data={resume.interests} />}
      {resume.references && <References data={resume.references} />}
    </div>
  );
}

export default App;
