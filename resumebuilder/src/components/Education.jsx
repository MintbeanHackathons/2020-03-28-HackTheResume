import React from 'react';

const Education = (props) => {
const { applicant } = props
console.log(applicant)
const education = applicant.education.map(ed => {
  const courses = ed.courses.map(course => {
    return(<p>{ course }</p>)
  })
  return(
    <div>
				<h4>Education: {ed.institution}</h4>
				<p>{ed.area}</p>
				<p>{ed.studyType}</p>
				<p>{ed.startDate}</p>
				<p>{ed.endDate}</p>
				<p>{ed.gpa}</p>
				<p>{ed.institution}</p>
        {courses}
			</div>
  )
})

  return (
    <div>
      { education }
    </div>
  );
}

export default Education;
