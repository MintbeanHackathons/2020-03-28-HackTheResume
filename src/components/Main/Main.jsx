import React from 'react';
import BasicSection from '../BasicSection/BasicSection';
import Experience from '../Experience/Experience';
import './Main.css';

function Main(props) {
	return (
		<div className="Main">
			<BasicSection title="About" text={props.summary} />
			<Experience experience={props.experience} />
		</div>
	);
}

export default Main;
