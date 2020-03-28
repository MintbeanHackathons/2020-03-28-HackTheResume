import React, { Component } from 'react';
import '../App.css';

function Publications(props){
    let publications = props.data
    return(
        <>
            <h3>{publications.name}</h3>
            <h4>{publications.publisher}</h4>
            <p>{publications.releaseDate}</p>
            <p>{publications.website}</p>
            <p>{publications.summary}</p>
        </>
    )
}

export default Publications