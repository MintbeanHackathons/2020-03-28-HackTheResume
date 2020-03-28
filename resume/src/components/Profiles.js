import React, { Component } from 'react';
import '../App.css';

function Profiles(props){
    let profiles = props.data
    return(
        <>
            <p className="contact">{profiles.network}</p>
            <p className="contact">Username: {profiles.username}</p>
            <button target="_blank" href={profiles.url}className="contact">{profiles.network} Account</button>
        </>
    )
}

export default Profiles