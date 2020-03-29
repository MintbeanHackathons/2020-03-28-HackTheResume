import React, {Fragment} from 'react';
import './App.css';
import { useHistory } from "react-router-dom";


export default function DataEntry(props) {
    let history = useHistory();
    let resume = props.location.state.resume;
  return (
    <div className='resume'>
    <div className="App-header">
    <h1> Your Resume </h1>
    <p><strong>{resume.basics.name}</strong></p>
    <p><strong>{resume.basics.label}</strong></p>
    <p>Address: {resume.basics.location.address}, {resume.basics.location.city}, {resume.basics.location.region}, {resume.basics.location.countryCode} {resume.basics.location.postalCode} </p>
    <p><u>Email</u>: {resume.basics.email}</p>
    <p><u>Phone</u>: {resume.basics.phone}</p>
    {
      resume.basics.profiles.map(profile=>(
        <p><u>{profile.network}</u>: <a href={profile.url}>{profile.username}</a> </p>
      ))
    }
    </div>
    <br></br>
    <h2><strong>Summary</strong></h2>
    <p>{resume.basics.summary}</p>
    <br></br>
    <div className='work'>
    <h2><strong>Work Experience</strong></h2>
    {
      resume.work.map(job=>(
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
    </div>
  )
}