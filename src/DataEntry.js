import React, {useState} from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Input from '@material-ui/core/Input';
import './App.css';
import { useHistory } from "react-router-dom";


export default function DataEntry({resume}) {
  let history = useHistory();
  const [state, setState] = useState(JSON.stringify(resume, null, 4));
  
  return (
  <form onSubmit={()=> history.push({pathname:"/resume", state: {resume: state}})} >
    <p>
      Enter your resume JSON to generate a resume
    </p>
    <h1>
      JSON Resume
    </h1>
    <TextareaAutosize className='textarea' aria-label="empty textarea" placeholder="JSON" value={state} onChange={e => setState(e.target.value)}/>
    <br></br>
    <Input type="submit" />

  </form>
  )
}