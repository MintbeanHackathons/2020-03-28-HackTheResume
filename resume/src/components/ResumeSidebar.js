import React from 'react';
import Contact from './Contact';
import Skills from './Skills';

const ResumeSidebar = (props) => {

    return (
        <div className="sidebar">
            <Contact basics={props.basics} />
            <Skills skills={props.skills} />
        </div>
    )
}

export default ResumeSidebar