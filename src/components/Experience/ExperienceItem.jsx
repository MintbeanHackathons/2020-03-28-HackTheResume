import React from 'react';

function ExperienceItem(props) {
	return (
		<div className="ExperienceItem">
			<h3>
				{props.position} | {props.company}
			</h3>
			<p>{props.summary}</p>
			<ul>
				{props.highlights.map(item => (
					<li>{item}</li>
				))}
			</ul>
		</div>
	);
}

export default ExperienceItem;
