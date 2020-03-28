import React from 'react';

const ResumeBasics = () => {
  return (
    <div>
      <ul>
						<li>{applicant.basics.name}</li>
						<li>{applicant.basics.label}</li>
						<li>{applicant.basics.email}</li>
						<li>{applicant.basics.phone}</li>
						<li>{applicant.basics.website}</li>
					</ul>
					<article>{applicant.basics.summary}</article>
    </div>
  );
}

export default ResumeBasics;
