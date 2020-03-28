import React, { Component } from 'react';
import '../App.css';

function Courses(props){
    let courses = props.data
    return(
        <p>{courses}</p>
    )
}

export default Courses