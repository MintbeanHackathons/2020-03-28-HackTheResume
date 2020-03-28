import React from 'react';

const Experience = (props) => {
    
    const work = props.work.map(work => {
        return (
            <div className="work-experience">
                <h3>{work.company}</h3>
                <h4>{work.position}</h4>
                <div>{work.startDate} - {work.endDate}</div>
                <div>{work.summary}</div>
                <ul className="work-bullets">
                    {work.highlights.map(highlight => <li>{highlight}</li>)}
                </ul>
                <div><a href={work.website}>Website</a></div>
                <hr/>
            </div>
        )
    })

    const volunteer = props.volunteer.map(volunteer => {
        return (
            <div className="volunteer-experience">
                <h3>{volunteer.organization}</h3>
                <h4>{volunteer.position}</h4>
                <div>{volunteer.startDate} - {volunteer.endDate}</div>
                <div>{volunteer.summary}</div>
                <ul className="work-bullets">
                    {volunteer.highlights.map(highlight => <li>{highlight}</li>)}
                </ul>
                <div><a href={volunteer.website}>Website</a></div>
            </div>
        )
    })

    return (
        <div className="experience-section">
            <h2>Experience</h2>
            {work}
            {volunteer}
        </div>
    )
}

export default Experience