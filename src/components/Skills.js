import React from 'react';
import generateKey from '@tammiec/generatekey';

const Skills = ({ data, ...props }) => {

  const skills = data.map(skill => {
    
    let keywords = '';

    for (let i = 0; i < skill.keywords.length; i++) {
      if (i === skill.keywords.length - 1) {
        keywords += skill.keywords[i];
      } else {
        keywords += skill.keywords[i] + ', ';
      }
    }

    return (
      <div key={generateKey()}>
        <h3>{skill.name}</h3>
        <p>{skill.name} | {skill.level}</p>
        <p>{keywords}</p>
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