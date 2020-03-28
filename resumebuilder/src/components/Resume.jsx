import React from "react";
import applicant from "../resume/applicant";
import ResumeBasics from "./ResumeBasics";

const Resume = props => {
  let {applicant} = props


	const workExp = applicant.work.map(exp => {
    let highlights = exp.highlights.map(high => {
      return (high)
    })
		return (
			<p>
        <h4>
          Company: {exp.company}
        </h4>
        <p>
          Position: {exp.position}
        </p>
        <p>
          Webiste: {exp.website}
        </p>
        <p>
          StartDate: {exp.startDate}
        </p>
        <p>
          EndDate: {exp.endDate}
        </p>
        <p>
          Summary: {exp.summary}
        </p>
        <p>
        Highlights: {highlights}
          </p>
      </p>
		);
	});


  return (
		<>
			<div>
				<h4>Basics</h4>
				<p>
          <ResumeBasics></ResumeBasics>
					<h4>Work</h4>
					{/* <li>{props.applicant.work}</li> */}

					<p>
            {workExp}
						<ul>
							<li></li>
						</ul>
					</p>
				</p>

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
