import React, { Component } from 'react';
import Highlights from './Highlights'
import '../App.css';

function Work(props){
    let work = props.data
    if(!work){
        return(
            <>
            </>
        )
    }
    return(
        <>
            <h3>{work.company}</h3>
            <h4>{work.position}</h4>
            <p>{work.website}</p>
            <p>{work.startDate}</p>
            <p>{work.endDate}</p>
            <p>{work.summary}</p>
            {work.highlights.map((el, i) => {
                return <Highlights data={el} key={i}/>
            })}

        </>
    )
}

export default Work