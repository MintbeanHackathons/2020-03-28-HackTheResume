import React from "react"
import ResumeSection from "../shared/ResumeSection"

import "./styles.css"
import Work from "./Work"

const Experience = ({ work }) => {
  const content = work.values.map((each, index) => {
    return <Work work={each} key={index} />
  })

  return (
    <div>
      <ResumeSection label="Experience" content={content} />
    </div>
  )
}

export default Experience