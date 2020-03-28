import React, { Component } from 'react';
import Keywords from './Keywords'
import '../App.css';

function Interests(props){
    let interests = props.data
    return(
        <>
            <h3>{interests.name}</h3>
            {interests.keywords.map((el, i) => {
                return <Keywords data={el} key={i}/>
            })}
        </>
    )
}

export default Interests