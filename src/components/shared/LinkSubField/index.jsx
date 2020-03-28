import React from "react"

import "./styles.css"

const LinkSubField = ({ field }) => {
  return (
    <div className="subFieldContainer" >
      <img className="subFieldIcon" src={field.image} alt={field.alt} />
      <span>{field.display}</span>
    </div>
  )
}

export default LinkSubField