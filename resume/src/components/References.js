import React, { Component } from 'react';
import Keywords from './Keywords'
import '../App.css';

function References(props){
    let references = props.data
    return(
        <>
            <h3>{references.name}</h3>
            <h4>{references.reference}</h4>
        </>
    )
}

export default References