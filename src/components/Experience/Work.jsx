import React from "react"

import websiteIcon from "../../assets/website.svg"
import LinkSubField from "../shared/LinkSubField"

const Work = ({ work }) => {
  const companySite = {
    image: websiteIcon,
    alt: "company site",
    display: <a href={work.website}>{work.website}</a>
  }

  return (
    <div className="workContainer">
      <div className="workHeader">
        <div className="company">{work.company}</div>
        <div className="date">{work.employmentTime()}</div>
      </div>
      <div className="role">{work.position}</div>
      <LinkSubField field={companySite} />
      <div className="summary">{work.summary}</div>
      <div className="highlightsContainer">
        {
          work.highlights.map((h) => {
            return <div>- {h}</div>
          })
        }
      </div>
    </div>
  )
}

export default Work