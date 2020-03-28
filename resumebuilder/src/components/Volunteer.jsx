import React from "react";

const Volunteer = props => {
	const { applicant } = props;
	const volunteer = applicant.volunteer.map(event => {
		return (
			<>
				<p>{event.organization}</p>
				<p>{event.position}</p>
				<p>{event.website}</p>
				<p>{event.startDate}</p>
				<p>{event.endDate}</p>
				<p>{event.summary}</p>
				<p>{event.highlights}</p>
			</>
		);
  });
  
	return (
		<div>
			<h4>Volunteer: </h4>
      {volunteer}
		</div>
	);
};

export default Volunteer;
