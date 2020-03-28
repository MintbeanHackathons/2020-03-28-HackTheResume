import React from 'react';

const Header = (props) => {

    const { name, label, summary, picture} = props.basics

    return(
        <header>
            {picture ? <img src={picture} alt={name} /> : null}
            <h1>{name}</h1>
            {label ? <h2>{label}</h2> : null}
            {summary ? <p>{summary}</p> : null}
        </header>
    )
}

export default Header