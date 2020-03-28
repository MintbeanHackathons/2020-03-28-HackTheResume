import React from 'react'
import Content from './components/Content'
import Sidebar from './components/Sidebar'
//this is the import of resume.json below, originally setup a server with http-server but I couldn't get the data to show up
//so I setup my own server with Express to get the data to show up, not sure why that worked?
import resume from '../resume.json'

const App = () => {
    console.log(resume)
  return (
    <div className="main-body">
        <Sidebar basics={resume.basics}/>
        <Content resume={resume}/>
    </div>
  )
}

export default App