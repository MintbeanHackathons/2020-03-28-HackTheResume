import React from "react";
import Title from "../Title";
import Info from "../Info";
import Profiles from "./Profiles";

export default function Section(props) {
  const profiles = props.data.profiles.map(profile => {
    return (
      <Profiles
        network={profile.network}
        username={profile.username}
        url={profile.url}
      />
    );
  });
  return (
    <>
      <Title name={props.title} />
      <div>Title: {props.data.name}</div>
      <image src={props.data.picture} />
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
    </>
  );
}
