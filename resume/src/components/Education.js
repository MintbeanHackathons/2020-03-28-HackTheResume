import React from 'react';

const Education = (props) => {
    console.log(props)

    const education = props.education.map(edu => {
        return(
            <div className="education">
                <h3>{edu.institution}</h3>
                <div>{edu.startDate} - {edu.endDate}</div>
                <div>{edu.studyType}, {edu.area}</div>
                <div>{edu.gpa}</div>
                <ul>{edu.courses.map(course => <li>{course}</li>)}</ul>
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
