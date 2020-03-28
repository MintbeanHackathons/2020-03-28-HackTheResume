import React, { Component } from 'react';
import '../App.css';

function Profiles(props){
    let profiles = props.data
    return(
        <>
            <p className="contact">{profiles.network}</p>
            <p className="contact">Username: {profiles.username}</p>
            <button onClick={() =>
            window.open(profiles.url, "_blank")
          }className="contact">{profiles.network} Account</button>
        </>
    )
}

export default Profiles