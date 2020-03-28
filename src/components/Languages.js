import React from 'react';
import generateKey from '@tammiec/generatekey';

const Languages = ({ data, ...props }) => {

  const languages = data.map(lang => <li key={generateKey()}>{lang.language} | {lang.fluency}</li>)

  return (
    <div id='languages-container'>
      <h2>Languages</h2>
      <ul>
        {languages}
      </ul>
    </div>
  );
};

export default Languages;