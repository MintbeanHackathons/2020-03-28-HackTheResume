import React from 'react';

const Basics = ({ data, ...props }) => {
  return (
    <div id='basics-container'>
      <h1>{data.name}</h1>
      <h3>{data.label}</h3>
      {data.img && <img src={data.img} alt='headshot' />}

      <h2>Contact</h2>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Website: {data.website}</p>

      <h2>Summary</h2>
      <p>{data.summary}</p>

      <h2>Location</h2>
      <p>Address: {data.location.address}</p>
      <p>Postal Code: {data.location.postalCode}</p>
      <p>City: {data.location.city}</p>
      <p>Region/Country: {data.location.region}, {data.location.countryCode}</p>

    </div>
  );
};

export default Basics;