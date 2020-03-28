import React from 'react';
import generateKey from '@tammiec/generatekey';

const Interests = ({ data, ...props }) => {

  const interests = data.map(int => <li key={generateKey()}>{int.name}: {int.keywords.join(', ')}</li>)

  return (
    <div id='interests-container'>
      <h2>Interests</h2>
      <ul>
        {interests}
      </ul>
    </div>
  );
};

export default Interests;