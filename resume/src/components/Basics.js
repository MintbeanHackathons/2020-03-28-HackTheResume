import React, { Component } from 'react';
import Profiles from './Profiles'
import '../App.css';

function Basics(props){
    let basics = props.data
    return(
        <div className="basics">
            <img src={basics.picture}></img>
            <h1>{basics.name}</h1>
            <small>{basics.label}</small>
            <hr/>
            <p className='contact'>{basics.email}</p>
            <p className='contact'>{basics.phone}</p>
            <p className='contact'>{basics.website}</p>
            <hr/>
            <p>{basics.summary}</p>
            <hr/>
            <p className='contact'>{basics.location.address}</p>
            <p className='contact'>{basics.location.city}</p>
            <p className='contact'>{basics.location.postalCode}</p>
            <p className='contact'>{basics.location.region}</p>
            <p className='contact'>{basics.location.countryCode}</p>
            <hr/>
            {basics.profiles.map((el, i) => {
                return <Profiles data={el} key={i}/>
            })}

        </div>
    )
}

export default Basics