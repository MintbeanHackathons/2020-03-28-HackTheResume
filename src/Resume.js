import React, {Fragment} from 'react';
import './App.css';


export default function DataEntry(props) {
    const resume = props.location.state.resume;
    const {name, label, email, phone, summary} = resume.basics;
    const {address, city, region, countryCode, postalCode} = resume.basics.location;
    const profiles = resume.basics.profiles;
    const {work, volunteer, education, awards, skills, publications, references, languages} = resume;

  return (
  <div>
    <h1> Your Resume </h1>
    <p><strong>{name}</strong></p>
    <p><strong>{label}</strong></p>
    <p>Address: {address}, {city}, {region}, {countryCode} {postalCode} </p>
    <p><u>Email</u>: {email}</p>
    <p><u>Phone</u>: {phone}</p>
    {
      profiles.map((profile, index)=>(
        <p key={index}><u>{profile.network}</u>: <a href={profile.url}>{profile.username}</a> </p>
      ))
    }
    <br></br>
    <h2><strong>Summary</strong></h2>
    <p>{summary}</p>
    <br></br>
    <div className='section'>
      <h2><strong>Work Experience</strong></h2>
      {
        work.map((job, index)=>(
          <div key={index}>
            <p>Company: {job.company}</p>
            <p>Position: {job.position}</p>
            <p>Website: <a href={job.website}>{job.website}</a></p>
            <p>Start Date: {job.startDate}</p>
            <p>End Date: {job.endDate}</p>
            <p><u>Summary</u></p>
            <p>{job.summary}</p>
            <p><u>Highlights</u></p>
            {job.highlights.map((highlight, index)=>(
              <li key={index}>{highlight}</li>
            ))}
          </div>
        ))
      }
    </div>
    <br></br>
    <div className='section'>
      <h2><strong>Volunteer Experience</strong></h2>
      {
        volunteer.map((job, index)=>(
          <div key={index}>
            <p>Organization: {job.organization}</p>
            <p>Position: {job.position}</p>
            <p>Website: <a href={job.website}>{job.website}</a></p>
            <p>Start Date: {job.startDate}</p>
            <p>End Date: {job.endDate}</p>
            <p><u>Summary</u></p>
            <p>{job.summary}</p>
            <p><u>Highlights</u></p>
            {job.highlights.map((highlight, index)=>(
              <li key={index}>{highlight}</li>
            ))}

          </div>
        ))
      }
    </div>
    <br></br>
    <div className='section'>
      <h2><strong>Education</strong></h2>
      {
        education.map((school, index)=>(
          <div key={index}>
            <p>Institution: {school.institution}</p>
            <p>Area of Study: {school.area}</p>
            <p>Degree Earned: {school.studyType}</p>
            <p>Start Date: {school.startDate}</p>
            <p>End Date: {school.endDate}</p>
            <p>GPA: {school.gpa}</p>
            <p><u>Courses</u></p>
            {school.courses.map((course, index)=>(
              <li key={index}>{course}</li>
            ))}

          </div>
        ))
      }
    </div>
    <br></br>
    <div className="section">
      <h2><strong>Awards</strong></h2>
      {
        awards.map((award,index)=>(
        <div key={index}>
          <p>Award Title: {award.title}</p>
          <p>Date Earned: {award.date}</p>
          <p>Awarded By: {award.awarder}</p>
          <p>Award Title: {award.title}</p>
          <p><u>Summary</u></p>
          <p>{award.summary}</p>
        </div>
        ))
      }
    </div>

  </div>

  )
}