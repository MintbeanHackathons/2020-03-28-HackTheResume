import React, { useState } from 'react';
import sampleResume from "../assets/sampleResume";

export default function ResumeContainer() {
  // const sample = {sampleResume: "peos"};
  // const [information, setInformation] = useState(JSON.parse(sample))
  const jasson = JSON.stringify(sampleResume);
  const obj = [JSON.parse(jasson)];
  console.log("this is OBJ: ", obj);


  return (
    <>
      <h1>This is where your resume goes</h1>
      {obj.map(info => (
        <ResumeField
          
        />
      ))}
    </>
  );
}