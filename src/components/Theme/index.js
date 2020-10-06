import React from 'react';

import {
  useTheme,
} from 'src/context/themes';

import { Translate } from 'src/context/languages';

export default function ThemeSelector() {
  const {
    toggleTheme,
    currentTheme,
  } = useTheme();

  const handelOnClickChangeTheme = (event) => {
    return (
      toggleTheme(event.target.id)
    );
  };

  return (

    <div
      className="button"
      id={currentTheme === 'dark' ? 'light' : 'dark'}
      onClick={handelOnClickChangeTheme}
    >{currentTheme === 'dark' ? <Translate trId="lightTheme" /> : <Translate trId="darkTheme" />}
    </div>
  );
}
