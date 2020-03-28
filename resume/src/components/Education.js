import React, { Component } from 'react';
import Courses from './Courses'
import '../App.css';

function Education(props){
    let education = props.data
    return(
        <>
            <h3>{education.institution}</h3>
            <h4>{education.area}</h4>
            <p>{education.studyType}</p>
            <p>{education.startDate}</p>
            <p>{education.endDate}</p>
            <p>{education.gpa}</p>
            {education.courses.map((el, i) => {
                return <Courses data={el} key={i}/>
            })}

        </>
    )
}

export default Education