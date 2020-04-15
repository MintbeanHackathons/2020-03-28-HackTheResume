import React from 'react';

const Experience = (props) => {
    
    const work = props.work.map((work, i) => {
        return (
            <div className="work-experience" key={i}>
                <h3>
                    {work.company} ({new Date(work.startDate).getFullYear()} &ndash; {new Date(work.endDate).getFullYear()})
                </h3>
                {work.position.map((position, i) => <p className="italic" key={i}>{position}</p>)}
                {work.summary && <p>{work.summary}</p>}
                <ul className="work-bullets">
                    {work.highlights.map((highlight, i) => <li key={i}>{highlight}</li>)}
                </ul>

                {work.projects && 
                    <div>
                        <p className="bold">Key Projects:</p>
                        <ul className="work-bullets">
                            {work.projects.map((project,i) => 
                                <li key={i}><span className="bold">{project.title}:</span> {project.description}</li>
                            )}
                        </ul>
                    </div>
                }
            </div>
        )
    })

    const volunteer = props.volunteer.map((volunteer, i) => {
        return (
            <div className="work-experience" key={i}>
                <h3>
                    {volunteer.organization} ({new Date(volunteer.startDate).getFullYear()} &ndash; {volunteer.endDate === "Present" ? "Present" : new Date(volunteer.endDate).getFullYear()})
                </h3>
                <p className="italic">{volunteer.position}</p>
                {volunteer.summary && <p>{volunteer.summary}</p>}
                <ul className="work-bullets">
                    {volunteer.highlights.map((highlight, i) => <li key={i}>{highlight}</li>)}
                </ul>
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