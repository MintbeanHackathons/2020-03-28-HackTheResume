import React from "react";
import Head from "next/head";
import Basics from "../components/Basics";
import Work from "../components/Work";
import Volunteer from "../components/Volunteer";
import Education from "../components/Education";
import Awards from "../components/Awards";
import Publications from "../components/Publications";
import Skills from "../components/Skills";
import Languages from "../components/Languages";
import Interests from "../components/Interests";
import References from "../components/References";
import resume from "../components/resume.json";

const Resume = () => {
  let works = resume.work.map((work, i) => {
    return <Work data={work} key={i} />;
  });
  let volunteers = resume.volunteer.map((volunteer, i) => {
    return <Volunteer data={volunteer} key={i} />;
  });
  let educations = resume.education.map((education, i) => {
    return <Education data={education} key={i} />;
  });
  let awards = resume.awards.map((award, i) => {
    return <Awards data={award} key={i} />;
  });
  let publications = resume.publications.map((publication, i) => {
    return <Publications data={publication} key={i} />;
  });
  let skills = resume.skills.map((skill, i) => {
    return <Skills data={skill} key={i} />;
  });
  let languages = resume.languages.map((language, i) => {
    return <Languages data={language} key={i} />;
  });
  let interests = resume.interests.map((interest, i) => {
    return <Interests data={interest} key={i} />;
  });
  let references = resume.references.map((reference, i) => {
    return <References data={reference} key={i} />;
  });
  return (
    <div>
      <Head>
        <title>Srikar Kalvakolanu - Resume</title>
      </Head>
      <Basics data={resume.basics} />
      <hr />
      <h2>Work</h2>
      <hr />
      {works}
      <hr />
      <h2>Volunteer</h2>
      <hr />
      {volunteers}
      <hr />
      <h2>Education</h2>
      <hr />
      {educations}
      <hr />
      <h2>Awards</h2>
      <hr />
      {awards}
      <hr />
      <h2>Publications</h2>
      <hr />
      {publications}
      <hr />
      <h2>Skills</h2>
      <hr />
      {skills}
      <hr />
      <h2>Languages</h2>
      <hr />
      {languages}
      <hr />
      <h2>Interests</h2>
      <hr />
      {interests}
      <hr />
      <h2>References</h2>
      <hr />
      {references}
      <style jsx>{``}</style>
    </div>
  );
};

export default Resume;
