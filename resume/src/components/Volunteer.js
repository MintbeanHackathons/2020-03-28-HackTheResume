import React, { Component } from 'react';
import Highlights from './Highlights'
import '../App.css';

function Volunteer(props){
    let volunteer = props.data
    return(
        <>
            <h3>{volunteer.organization}</h3>
            <h4>{volunteer.position}</h4>
            <p>{volunteer.website}</p>
            <p>{volunteer.startDate}</p>
            <p>{volunteer.endDate}</p>
            <p>{volunteer.summary}</p>
            {volunteer.highlights.map((el, i) => {
                return <Highlights data={el} key={i}/>
            })}

        </>
    )
}

export default Volunteer