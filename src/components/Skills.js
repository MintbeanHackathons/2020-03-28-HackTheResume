import React from 'react';
import generateKey from '@tammiec/generatekey';

const Skills = ({ data, ...props }) => {

  const skills = data.map(skill => {

    return (
      <div key={generateKey()}>
        <h3>{skill.name}</h3>
        <p>{skill.name} | {skill.level}</p>
        <p>{skill.keywords.join(', ')}</p>
      </div>
    );
  });

  return (
    <div id='skills-container'>
      <h2>Skills</h2>
      {skills}
    </div>
  );
};

export default Skills;