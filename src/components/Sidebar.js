import React from 'react'
import Card from 'react-bootstrap/Card'

const Sidebar = ({basics, location, profiles}) => {
    return (
        <Card className="sidebar">
            <Card.Img src="https://cdn1.vectorstock.com/i/1000x1000/26/45/young-executive-woman-profile-icon-vector-9692645.jpg"/>
            <Card.Header>{basics.name}</Card.Header>
            <Card.Body>{basics.label}</Card.Body>
            <Card.Footer>{basics.profiles.map(profile => <p key={profile.network}>{profile.url}</p>)}</Card.Footer>
        </Card>
    )
}

export default Sidebar