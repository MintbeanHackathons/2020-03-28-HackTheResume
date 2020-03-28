import React from "react"

const Work = ({ work }) => {
  return (
    <div>
      <div className="workHeader">
        <div className="company">{work.company}</div>
        <div className="date">{work.employmentTime()}</div>
      </div>
    </div>
  )
}

export default Work