import React from 'react';
import './BasicSection.css';

function BasicSection(props) {
	return (
		<div className="BasicSection">
			<h2>{props.title}</h2>
			<p>{props.text}</p>
		</div>
	);
}

export default BasicSection;
