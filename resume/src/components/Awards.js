import React, { Component } from 'react';
import '../App.css';

function Awards(props){
    let awards = props.data
    return(
        <>
            <h3>{awards.title}</h3>
            <h4>{awards.date}</h4>
            <p>{awards.awarder}</p>
            <p>{awards.summary}</p>
        </>
    )
}

export default Awards