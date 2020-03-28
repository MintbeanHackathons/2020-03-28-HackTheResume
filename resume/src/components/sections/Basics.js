import React from "react";
import Title from "../Title";
import Info from "../Info";
import Profiles from "./Profiles";

import "./Sections.css";

export default function Section(props) {
  let counter = 0;
  const profiles = props.data.profiles.map(profile => {
    counter++;
    return (
      <Profiles
        network={profile.network}
        username={profile.username}
        url={profile.url}
        key={counter}
      />
    );
  });
  return (
    <>
      <div className="section">
        <Title name={props.title} />
        <div className="section-body">
          <div>Title: {props.data.name}</div>
          {/* <image src={props.data.picture} /> */}
          <div>Email: {props.data.email}</div>
          <div>Phone: {props.data.phone}</div>
          <div>
            Address: {props.data.location.address}
            {", "}
            {props.data.location.postalCode}
            {", "}
            {props.data.location.city}
            {", "}
            {props.data.location.countryCode}
            {", "}
            {props.data.location.region}
          </div>
          <div>Website: {props.data.website}</div>
          <div>Profiles: {profiles}</div>

          <div>Summary: {props.data.summary}</div>
        </div>
      </div>
    </>
  );
}
