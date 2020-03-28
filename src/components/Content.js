import React from 'react'
import Image from './Image'
//import '../stylesheets/home.scss'

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="profile">
                <Image img = {}/>
                <Contact/>
                <Social/>
            </div>
        </div>
    )
}

export default Sidebar