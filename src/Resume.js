import React, {Fragment} from 'react';
import './App.css';


export default function DataEntry(props) {
    const resume = props.location.state.resume;
    const {name, label, email, phone, summary} = resume.basics;
    const {address, city, region, countryCode, postalCode} = resume.basics.location;
    const profiles = resume.basics.profiles;
    const work = resume.work;

  return (
  <div>
    <h1> Your Resume </h1>
    <p><strong>{name}</strong></p>
    <p><strong>{label}</strong></p>
    <p>Address: {address}, {city}, {region}, {countryCode} {postalCode} </p>
    <p><u>Email</u>: {email}</p>
    <p><u>Phone</u>: {phone}</p>
    {
      profiles.map(profile=>(
        <p><u>{profile.network}</u>: <a href={profile.url}>{profile.username}</a> </p>
      ))
    }
    <br></br>
    <h2><strong>Summary</strong></h2>
    <p>{summary}</p>
    <br></br>
    <div className='work'>
      <h2><strong>Work Experience</strong></h2>
      {
        work.map(job=>(
          <div>
            <p>Company: {job.company}</p>
            <p>Position: {job.position}</p>
            <p>Website: <a href={job.website}>{job.website}</a></p>
            <p>Start Date: {job.startDate}</p>
            <p>End Date: {job.endDate}</p>
            <p>Summary</p>
          <p>{job.summary}</p>
          </div>
        ))
      }
    </div>
    <br></br>
  </div>

  )
}