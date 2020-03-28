import React from "react"

import "./styles.css"

const ResumeSection = ({ label, content}) => {
  return (
    <div className="sectionContainer">
      <div className="sectionLabel">{label}</div>
      <div className="sectionContent">{content}</div>
    </div>
  )
}

export default ResumeSection