import React from "react";
import applicant from "../resume/applicant";
import Basics from "./Basics";
import WorkExperience from "./WorkExperience";

const Resume = props => {
	let { applicant } = props;

	return (
		<>
			<div>
				<Basics applicant={applicant}></Basics>
        <WorkExperience applicant={applicant} />
				{/* <ul></ul>
					<li>{props.applicant.volunteer}</li>
					<li>{props.applicant.education}</li>
					<li>{props.applicant.awards}</li>
					<li>{props.applicant.publications}</li>
					<li>{props.applicant.skills}</li>
					<li>{props.applicant.languages}</li>
					<li>{props.applicant.interests}</li>
					<li>{props.applicant.references}</li> */}
			</div>
		</>
	);
};

export default Resume;
