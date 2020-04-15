import React from 'react';

const ResumeFooter = (props) => {

    const section = (label, content) => (
        <div>
            <h3>{label}</h3>
            {content}
        </div>)

    const publications = props.publications && props.publications.map(item =>
        <div className="publication" key={item.name}>
            <div><a href={item.website} alt={item.name}>{item.name}</a> | {item.publisher} | {item.releaseDate}</div>
            <div>{item.summary}</div>
        </div>
    )    
    const interests = props.interests && props.interests.map(item => item.name).join(", ")
    
    const languages = props.languages && props.languages.map(item => item.language).join(", ")

    const references = props.references && props.references.map(item =>
        <div key={item.name}>{item.name}, {item.reference}</div>
    )

    return (
        <div className="resume-footer">
            {publications && section("Publications", publications)}
            {references && section("References", references)}
            {languages && section("Languages", languages)}
            {interests && section("Interests", interests)}
        </div>
    )
}

export default ResumeFooter