import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Input from '@material-ui/core/Input';
import resume from './resume.json';
import './App.css';
import { useHistory } from "react-router-dom";


export default function ComposedTextField() {
  let history = useHistory();
  
  return (
  <form >
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