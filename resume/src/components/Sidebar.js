import React from 'react';
import Contact from './Contact';
import Skills from './Skills';

const Sidebar = (props) => {

    return (
        <div className="sidebar">
            <Contact basics={props.basics} />
            <Skills skills={props.skills} />
        </div>
    )
}

export default Sidebar