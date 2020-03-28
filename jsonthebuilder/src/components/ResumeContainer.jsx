import React, { useState } from 'react';
import sampleResume from "../assets/sampleResume";
import ResumeField from "./ResumeField";

export default function ResumeContainer() {
  // const sample = {sampleResume: "peos"};
  // const [information, setInformation] = useState(JSON.parse(sample))
  const jasson = JSON.stringify(sampleResume);
  const obj = [JSON.parse(jasson)];
  console.log("this is OBJ: ", obj);


  return (
    <>
      <h1>My Resume</h1>
      {obj.map(info => (
        <ResumeField
        name={info.basics.name}
        label={info.basics.label}
        email={info.basics.email}
        website={info.basics.website}
        />
      ))}
    </>
  );
}