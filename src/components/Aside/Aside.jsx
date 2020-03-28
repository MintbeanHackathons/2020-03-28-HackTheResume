import React from 'react';
import Contact from '../Contact/Contact';
import './Aside.css';

function Aside(props) {
	return <Contact contact={props.contact} />;
}

export default Aside;
