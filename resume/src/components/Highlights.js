import React, { Component } from 'react';
import '../App.css';

function Highlights(props){
    let highlights = props.data
    return(
        <p>{highlights}</p>
    )
}

export default Highlights