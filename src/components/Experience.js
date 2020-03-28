import React from 'react';
import generateKey from '@tammiec/generatekey';

const Experience = ({ data, type, orgType, title, ...props }) => {

  const experience = data.map(exp => {
    
    const position = type === 'education' ? `${exp.area}, ${exp.studyType}` : exp.position;
    const summary = type === 'education' ? `GPA: ${exp.gpa}` : exp.summary;
    const listItems = type === 'education' ? 'courses' : 'highlights';

    return (
      <div key={generateKey()}>
        <h3>{data[orgType]}</h3>
        <p>{position} | {exp.startDate} - {exp.endDate}</p>
        {type !== 'education' && <a href={exp.website}>{exp.website}</a>}
        <p>{summary}</p>
        <ul>
          {exp[listItems].map(item => <li key={generateKey()}>{item}</li>)}
        </ul>
      </div>
    )
  });

  return (
    <div id='experience-container'>
      <h2>{title}</h2>
      {experience}
    </div>
  );
};

export default Experience;