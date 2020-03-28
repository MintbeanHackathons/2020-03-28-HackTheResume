import React from 'react';
import Experience from './Experience';
import Education from './Education';

const Main = (props) => {
    return(
        <div className="main">
            <Experience work={props.work} volunteer={props.volunteer}/>
            <Education education={props.education}/>
        </div>
    )
}


export default Main