import React from 'react'
import Image from './Image'
import Card from 'react-bootstrap/Card'

const Content = ({resume}) => {
    return(
        <Card className="body">
            <Card.Header>Background</Card.Header>
            <div className="about">
                {resume.summary}
            </div>
        </Card>
    )
}

export default Content