import { useContext } from 'react';

import { LanguageContext } from 'src/context/languages';

export default function TranslateComponent(trId) {
  const { dictionary } = useContext(LanguageContext);

  console.log('TranslateComponent', dictionary[0][trId]);

  return (dictionary[0][trId] || trId);
}
