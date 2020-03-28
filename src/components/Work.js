import React from 'react';
import generateKey from '@tammiec/generatekey';

const Work = ({ data, ...props }) => {

  const workExperience = data.map(work => (
    <div key={generateKey()}>
      <h3>{work.company}</h3>
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
      <h2>Work Experience</h2>
      {workExperience}
    </div>
  );
};

export default Work;