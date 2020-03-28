import React from 'react';
import generateKey from '@tammiec/generatekey';

import './Basics.scss';

const Basics = ({ data, ...props }) => {

  const profiles = data.profiles.map(profile => (<p key={generateKey()}>{profile.network}: <a href={profile.url}>@{profile.username}</a></p>));

  return (
    <div id='basics-container'>
      <div className='basics-header'>
        <div>
          <h1>{data.name}</h1>
          <h3>{data.label}</h3>
        </div>
        {data.picture && <img src={data.picture} alt='headshot' />}
      </div>

      <div>
        <h2>Summary</h2>
        <p>{data.summary}</p>

        <div className='contact-section'>
          <div>
            <h2>Contact</h2>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Website: {data.website}</p>
            {profiles}
          </div>
          <div>
            <h2>Location</h2>
            <p>Address: {data.location.address}</p>
            <p>Postal Code: {data.location.postalCode}</p>
            <p>City: {data.location.city}</p>
            <p>Region/Country: {data.location.region}, {data.location.countryCode}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Basics;