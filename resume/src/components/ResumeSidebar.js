import React from 'react';
import Contact from './Contact';
import Skills from './Skills';
import Awards from './Awards';

const ResumeSidebar = ({basics, skills, awards}) => {

    return (
        <div className="sidebar">
            <Contact basics={basics} />
            <Skills skills={skills} />
            <Awards awards={awards}/>
        </div>
    )
}

export default ResumeSidebar