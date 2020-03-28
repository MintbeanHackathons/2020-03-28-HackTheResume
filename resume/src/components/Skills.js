import React from 'react';
import data from '../data/data.json'

const Skills = () => {

    const skills = data.skills.map(skill => {
        return (
        <div className="skill" key={skill.name}>
            <p><span className="bold">{skill.name}</span></p>
            {skill.level ? <p>{skill.level}</p> : null}
            <ul>
                {skill.keywords.map(item => <li>{item}</li>)}
            </ul>
        </div> )
    })

    return(
        <div className="skills-section">
            <h2>Skills</h2>
            {skills}
        </div>
    )
}

export default Skills