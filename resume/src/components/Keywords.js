import React, { Component } from 'react';
import '../App.css';

function Keywords(props){
    let keywords = props.data
    return(
        <p>{keywords}</p>
    )
}

export default Keywords