import React from "react"

import ResumeSection from "../shared/ResumeSection"

const About = ({ content }) => {
  return (
    <>
      <ResumeSection label="About" content={content} />
    </>
  )
}

export default About