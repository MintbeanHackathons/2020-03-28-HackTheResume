import React from "react"

const Work = ({ work }) => {
  return (
    <div className="workContainer">
      <div className="workHeader">
        <div className="company">{work.company}</div>
        <div className="date">{work.employmentTime()}</div>
      </div>
      <div className="role">{work.position}</div>
    </div>
  )
}

export default Work