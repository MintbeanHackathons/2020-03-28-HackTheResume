import React from 'react';
import ExperienceItem from './ExperienceItem';
import './Experience.css';

function Experience(props) {
	return (
		<div className="Experience">
			<h2>EXPERIENCE</h2>
			{props.experience.map(item => (
				<ExperienceItem
					position={item.position}
					company={item.company}
					summary={item.summary}
					highlights={item.highlights}
				/>
			))}
		</div>
	);
}

export default Experience;
