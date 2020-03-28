import React, { Component } from 'react';
import Keywords from './Keywords'
import '../App.css';

function Skills(props){
    let skills = props.data
    return(
        <>
            <h3>{skills.name}</h3>
            <h4>{skills.level}</h4>
            {skills.keywords.map((el, i) => {
                return <Keywords data={el} key={i}/>
            })}

        </>
    )
}

export default Skills