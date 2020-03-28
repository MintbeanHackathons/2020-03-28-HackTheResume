import React, { Component } from 'react';
import '../App.css';

function Languages(props){
    let languages = props.data
    return(
        <>
            <h3>{languages.language}</h3>
            <p>{languages.fluency}</p>
        </>
    )
}

export default Languages