import React, { useContext, useEffect } from 'react';

import { languageOptions } from 'src/data/languages';
import { LanguageContext } from 'src/context/languages';
import './styles.scss';

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // set selected language by calling context method
  const handleLanguageChange = (event) => userLanguageChange(event.target.value);
  return (
    <select
      className="select"
      onChange={handleLanguageChange}
      value={userLanguage}
    >
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}> {name}</option>
      ))}
    </select>
  );
}
