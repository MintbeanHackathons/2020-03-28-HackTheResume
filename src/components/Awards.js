import React from 'react';
import generateKey from '@tammiec/generatekey';

const Awards = ({ data, ...props }) => {

  const awards = data.map(award => (
    <div key={generateKey()}>
      <h3>{award.title}</h3>
      <p>{award.awarder} | {award.date}</p>
      <p>{award.summary}</p>
    </div>
  ));

  return (
    <div id='awards-container'>
      <h2>Awards</h2>
      {awards}
    </div>
  );
};

export default Awards;