import React, {Fragment} from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Input from '@material-ui/core/Input';
import './App.css';
import { useHistory } from "react-router-dom";


export default function DataEntry(props) {
    let history = useHistory();
    let resume = props.location.state.resume;
  return (
    <>
    <h1> Your Resume </h1>
    <p><strong>{resume.basics.name}</strong></p>
    <p><strong>{resume.basics.label}</strong></p>
    <p>Address: {resume.basics.location.address}, {resume.basics.location.city}, {resume.basics.location.region}, {resume.basics.location.countryCode} {resume.basics.location.postalCode} </p>
    <p><u>Email</u>: {resume.basics.email}</p>
    <p><u>Phone</u>: {resume.basics.phone}</p>
    <br></br>
    <h2><strong>Summary</strong></h2>
    <p>{resume.basics.summary}</p>

    </>
  )
}