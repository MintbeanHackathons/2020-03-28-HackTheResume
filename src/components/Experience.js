import React from 'react';
import generateKey from '@tammiec/generatekey';

const Experience = ({ data, type, title, ...props }) => {

  const experience = data.map(work => (
    <div key={generateKey()}>
      <h3>{type === 'work' ? work.company : work.organization}</h3>
      <h4>{work.position}</h4>
      <a href={work.website}>{work.website}</a>
      <p>{work.startDate} - {work.endDate}</p>
      <p>{work.summary}</p>
      <ul>
        {work.highlights.map(highlight => <p key={generateKey()}>{highlight}</p>)}
      </ul>
    </div>
  ))

  return (
    <div id='work-container'>
      <h2>{title}</h2>
      {experience}
    </div>
  );
};

export default Experience;