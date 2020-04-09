import React from 'react';

const Education = (props) => {

    const education = props.education.map((edu, i) => {
        return(
            <div className="education" key={i}>
                <h3>{edu.institution}</h3>
                <div>{edu.area}, {edu.studyType}</div>
            </div>
        )
    })

    return(
        <div className="education-section">
            <h2>Education</h2>
            {education}
        </div>
    )
}

export default Education
