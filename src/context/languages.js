import React, {
  useState,
  useContext,
  createContext,
} from 'react';

import { languageOptions, dictionaryList } from 'src/data/languages';

// create the language context with default selected language
export const LanguageContext = createContext({
  userLanguage: 'en',
  dictionary: dictionaryList.en,
});

// it provides the language context to app
export function LanguageProvider({ children }) {

  let defaultLanguage = localStorage.getItem('lang');
  if (!defaultLanguage) {
    defaultLanguage = window.navigator.language.substring(0, 2);
  }

  const [userLanguage, setUserLanguage] = useState('en');

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : 'en';
      setUserLanguage(newLanguage);
      localStorage.setItem('lang', newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

export function Translate({ trId }) {
  const languageContext = useContext(LanguageContext);
  return languageContext.dictionary[0][trId] || trId;
}
