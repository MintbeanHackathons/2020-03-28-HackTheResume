import React from "react";

import Portfolio from "../icons/portfolio.png";
import LinkedIn from "../icons/linkedin.png";
import Github from "../icons/github.png";
import Email from "../icons/email.png";

const Contact = (props) => {
  const { email, phone, website, profiles, location } = props.basics;

  return (
    <div className="contact sidebar-section">
      <h2>Contact</h2>
      <ul className="contact-details">
        {email ? (
          <li>
            <img className="icon" src={Email} alt="email icon" />
            <a href={`mailto:${email}`}>Email</a>
          </li>
        ) : null}

        {phone ? <li>{phone}</li> : null}

        {website ? (
          <li>
            <img className="icon" src={Portfolio} alt="website icon" />
            <a href={website}>Website</a>
          </li>
        ) : null}

        {profiles
          ? profiles.map((profile) => (
              <li key={profile.network}>
                <img
                  className="icon"
                  src={
                    profile.network === "LinkedIn"
                      ? LinkedIn
                      : profile.network === "Github"
                      ? Github
                      : null
                  }
                  alt={`${profile.network} icon`}
                />
                <a href={profile.url}>{profile.network}</a>
              </li>
            ))
          : null}
      </ul>

      {location.address ? (
        <ul className="address-details">
          <li>{location.address}</li>
          <li>
            {location.city}, {location.postalCode}
          </li>
          <li>
            {location.region}, {location.countryCode}
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Contact;
