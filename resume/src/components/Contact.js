import React from 'react';

const Contact = (props) => {

    const { email, phone, website, profiles, location } = props.basics

    return (
        <div className="contact-section">
            <h2>Contact</h2>
            <ul className="contact-details">
                <li>{email}</li>
                <li>{phone}</li>
                {website ?
                    <li>
                        <a href={website}>
                            {website}
                        </a>
                    </li>
                    : null}
                {profiles ? profiles.map(profile =>
                    <li key={profile.network}>
                        <a href={profile.url}>
                            {profile.network}: {profile.username}
                        </a>
                    </li>
                ) : null}
            </ul>
            <ul className="address-details">
                {location.address ? <li>{location.address}</li> : null}
                <li>{location.city}, {location.postalCode}</li>
                {(location.region && location.countryCode) ?
                    <li>
                        {location.region}, {location.countryCode}
                    </li>
                    : null}
            </ul>
        </div>
    )
}

export default Contact