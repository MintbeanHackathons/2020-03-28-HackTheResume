import React from 'react';
import data from '../data/data.json'

const Header = () => {

    const { name, label, summary, picture} = data.basics

    return(
        <div className="header">
            {picture ? <img src={picture} alt={name} /> : null}
            <h1>{name}</h1>
            {label ? <h2>{label}</h2> : null}
            {summary ? <p>{summary}</p> : null}
        </div>
    )
}

export default Header