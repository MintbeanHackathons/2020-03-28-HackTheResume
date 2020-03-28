import React from 'react';
import Aside from '../Aside/Aside';
import Main from '../Main/Main';

import './Body.css';

function Body(props) {
	return (
		<div className="Body">
			<Aside contact={props.basics} />
			<Main summary={props.basics.summary} experience={props.experience} />
		</div>
	);
}

export default Body;
