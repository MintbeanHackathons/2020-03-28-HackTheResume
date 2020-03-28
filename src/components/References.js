import React from 'react';
import generateKey from '@tammiec/generatekey';

const References = ({ data, ...props }) => {

  const references = data.map(ref => <li key={generateKey()}>{ref.reference} - {ref.name}</li>)
  return (
    <div id='references-container'>
      <h2>References</h2>
      <ul>
        {references}
      </ul>
    </div>
  );
};

export default References;