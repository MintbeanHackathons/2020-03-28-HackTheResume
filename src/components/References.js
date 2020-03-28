import React, { Fragment } from 'react';
import generateKey from '@tammiec/generatekey';

import './References.scss';

const References = ({ data, ...props }) => {

  const references = data.map(ref => (
    <Fragment key={generateKey()}>
      <p>{ref.reference}</p>
      <p className='reference-name'>- {ref.name}</p>
    </Fragment>
  ));

  return (
    <div id='references-container'>
      <h2>References</h2>
      {references}
    </div>
  );
};

export default References;