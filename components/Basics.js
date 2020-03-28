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
        {props.data.label} - {props.data.location.region}
      </h4>
      <h4>
        {props.data.location.address}, {props.data.location.city},{" "}
        {props.data.location.postalCode} {props.data.location.countryCode}
      </h4>
      <img src={props.data.picture} alt="headshot" />
      <p>{props.data.email}</p>
      <p>{props.data.phone}</p>
      <p>
        <a href={props.data.website}>{props.data.website}</a>
      </p>
      <p className="summary">{props.data.summary}</p>
      <h4>Connect With Me:</h4>
      {profiles}
      <style jsx>{`
        div {
          background: #ef709d;
          padding: 20px;
          border: 3px solid black;
          margin-bottom: 20px;
        }
        h1,
        h4 {
          width: 60vw;
          text-align: center;
          margin: auto;
        }
        img {
          display: block;
          width: 150px;
          margin: 5px auto;
        }
        p {
          width: 50vw;
          margin: auto;
          text-align: center;
          padding: 5px 0;
        }

        .summary {
          font-style: italic;
        }
      `}</style>
    </div>
  );
};

export default Basics;
