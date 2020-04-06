import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Input from '@material-ui/core/Input';
import './App.css';
import { useHistory } from "react-router-dom";


export default function DataEntry({resume}) {
  let history = useHistory();

  return (
  <form onSubmit={()=> history.push({pathname:"/resume", state: {resume: resume}})} >
    <p>
      Enter your resume JSON to generate a resume
    </p>
    <h1>
      JSON Resume
    </h1>
    <TextareaAutosize className='textarea' aria-label="empty textarea" placeholder="JSON" value={JSON.stringify(resume, null, 4)}/>
    <br></br>
    <Input type="submit" />

  </form>
  )
}