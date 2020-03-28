import React from "react"

const IntroductionSubField = ({ field }) => {
  return (
    <div className="subFieldContainer" >
      <img className="subFieldIcon" src={field.image} alt={field.alt} />
      <span>{field.display}</span>
    </div>
  )
}

export default IntroductionSubField