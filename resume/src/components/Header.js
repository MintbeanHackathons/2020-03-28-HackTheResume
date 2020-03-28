import React from 'react';
import data from '../data/data.json'

const Header = () => {

    const { name, label, summary} = data.basics

    return(
        <div className="header">
            <h1>{name}</h1>
            <h2>{label}</h2>
            <p>{summary}</p>
        </div>
    )
}

export default Header