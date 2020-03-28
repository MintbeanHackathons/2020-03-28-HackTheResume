import React from 'react';
import generateKey from '@tammiec/generatekey';

const Publications = ({ data, ...props }) => {

  const publications = data.map(pub => (
    <div key={generateKey()}>
      <h3>{pub.name}</h3>
      <p>{pub.publisher} | {pub.releaseDate}</p>
      <a href={pub.website}>{pub.website}</a>
      <p>{pub.summary}</p>
    </div>
  ));

  return (
    <div id='publications-container'>
      <h2>Publications</h2>
      {publications}
    </div>
  );
};

export default Publications;