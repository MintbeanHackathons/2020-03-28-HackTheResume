import React from 'react';
import generateKey from '@tammiec/generatekey';

import './Experience.scss';

const Experience = ({ data, type, orgType, title, ...props }) => {

  const experience = data.map(exp => {
    
    const position = type === 'education' ? `${exp.area}, ${exp.studyType}` : exp.position;
    const summary = type === 'education' ? `GPA: ${exp.gpa}` : exp.summary;
    const listItems = type === 'education' ? 'courses' : 'highlights';

    return (
      <div key={generateKey()}>
        <h3>{exp[orgType]}</h3>
        {type !== 'education' && <a href={exp.website}>{exp.website}</a>}
        <p><span>{position}</span> | {exp.startDate} - {exp.endDate}</p>
        <p>{summary}</p>
        <ul>
          {exp[listItems].map(item => <li key={generateKey()}>{item}</li>)}
        </ul>
      </div>
    )
  });

  return (
    <div className='experience-container'>
      <h2>{title}</h2>
      <div className='experience-item'>
        {experience}
      </div>
    </div>
  );
};

export default Experience;