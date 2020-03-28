import React from 'react';

const WorkExperience = (props) => {
  const { applicant } = props

  const workExp = applicant.work.map(exp => {
		let highlights = exp.highlights.map(high => {
			return high;
		});
		return (
			<div>
				<h4>Company: {exp.company}</h4>
				<p>Position: {exp.position}</p>
				<p>Webiste: {exp.website}</p>
				<p>StartDate: {exp.startDate}</p>
				<p>EndDate: {exp.endDate}</p>
				<p>Summary: {exp.summary}</p>
				<p>Highlights: {highlights}</p>
			</div>
		);
  });
  
  return (
    <>
      {workExp}
    </>
  );
}

export default WorkExperience;
