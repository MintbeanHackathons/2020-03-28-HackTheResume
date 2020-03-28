import React from 'react';
import './Header.css';

function Header(props) {
	return (
		<div className="Header">
			<h1>{props.name}</h1>
			<h2>{props.label}</h2>
		</div>
	);
}

export default Header;
