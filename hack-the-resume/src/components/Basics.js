import React from 'react'
import '../styles/Basics.css'
import logo from '../resume/assets/profile-pic.jpg'

const Basics = (props) => {
  return (
    <div className='Basics'>
      <img src={logo} className="Pic" alt="profile pic" />
      <h2>{props.basics.name} | {props.basics.label}</h2>
      <p>{props.basics.summary}</p>
      <br/>
      <p>{props.basics.email}</p>
      <p>{props.basics.phone}</p>
      <p>{props.basics.website}</p>
      <p>{props.basics.location.address}</p>
      <p>{props.basics.location.city}, {props.basics.location.region}</p>
      <p>{props.basics.location.countryCode} - {props.basics.location.postalCode}</p>
      <br/>
      <h3>Profiles</h3>
      {props.basics.profiles.map(each => (
        <div>
          <p>{each.network}: {each.username}</p>
          <a className='Basics-link' href={each.url}>{each.url}</a>
          <br/>
        </div>
      ))}
    </div>
  )
}

export default Basics
