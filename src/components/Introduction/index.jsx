import React from "react"
import Name from "./Name"
import Label from "./Label"
import IntroductionSubField from "./IntroductionSubField"
import Divider from "../shared/Divider"
import About from "./About"


import "./styles.css"

import emailIcon from "../../assets/email.svg"
import phoneIcon from "../../assets/phone.svg"
import locationIcon from "../../assets/location.svg"
import websiteIcon from "../../assets/website.svg"

const Introduction = ({ basics }) => {
  const introductionFields = [
    {
      image: locationIcon,
      alt: "location",
      display: basics.location.forDisplay()
    },
    {
      image: websiteIcon,
      alt: "website",
      display: basics.website
    },
    {
      image: emailIcon,
      alt: "email",
      display: basics.email
    },
    {
      image: phoneIcon,
      alt: "phone",
      display: basics.phone
    },
  ]

  const renderIntroductionFields = (fields) => {
    return fields.map((field, index) => {
      return <IntroductionSubField field={field} key={index} />
    })
  }

  // add in profiles

  return (
    <div className="introductionContainer" >
      <Name name={basics.name} />
      <Label label={basics.label} />
      <Divider />
      {
        renderIntroductionFields(introductionFields)
      }
      <Divider />
      <About content={basics.summary} />
    </div>
  )
}

export default Introduction