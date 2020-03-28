import React from "react";
import Profiles from "../components/Profiles";

const Basics = props => {
  let profiles = props.data.profiles.map((profile, i) => {
    return <Profiles data={profile} key={i} />;
  });
  return (
    <div>
      <h1>{props.data.name}</h1>
      <h4>
        {props.data.label} -- {props.data.location.region}
      </h4>
      <h4>
        {props.data.location.address}, {props.data.location.city},{" "}
        {props.data.location.postalCode} {props.data.location.countryCode}
      </h4>
      <img src={props.data.picture} alt="headshot" />
      <ul>
        <li>{props.data.email}</li>
        <li>{props.data.phone}</li>
        <li>{props.data.website}</li>
      </ul>
      <p>{props.data.summary}</p>
      {profiles}
      <style jsx>{``}</style>
    </div>
  );
};

export default Basics;
