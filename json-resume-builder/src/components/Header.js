import React, { Component } from "react";
import styled from "styled-components";
import resumeData from "../resume.json";

export default class Header extends Component {
  render() {
    const resumeBasics = resumeData.basics;
    const resumeSocial = resumeData.basics.profiles;
    return (
      <header>
        <span>{resumeBasics.name}</span>
        <span>
          <ul>
            <li>{resumeBasics.email}</li>
            <li>{resumeBasics.website}</li>
            <li>{resumeBasics.phone}</li>
            <li>
              {resumeBasics.location.city}, {resumeBasics.location.region}
            </li>
            <span>
              {resumeSocial.map(social => {
                return (
                  <a href={social.url}>
                    <li>
                      {social.network}: {social.username}
                    </li>
                  </a>
                );
              })}
            </span>
          </ul>
        </span>
      </header>
    );
  }
}
