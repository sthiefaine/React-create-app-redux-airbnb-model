import React, {
  useState,
  useContext,
  createContext,
} from 'react';

import { darkTheme, lightTheme } from 'src/styles/themes';
import { ThemeProvider as BaseThemeProvider } from 'styled-components';

// == theme context
export const ThemeContext = createContext(null);

// == themeProvider
export const ThemeProvider = ({ children }) => {
  const localSt = localStorage.getItem('currentTheme');

  const themeValue = localSt || 'light';

  const [themeString, setThemeString] = useState(themeValue);
  const themeObject = (themeString === 'dark' ? darkTheme : lightTheme);

  return (
    <ThemeContext.Provider
      value={{ themeString, setThemeString }}
    >
      <BaseThemeProvider
        theme={themeObject}
      >
        {children}
      </BaseThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useTheme must be used within a ThemeProvider');

  const { themeString, setThemeString } = context;

  const toggleTheme = (value) => {
    setThemeString(value);
    localStorage.setItem('currentTheme', value);
  };

  return ({
    currentTheme: themeString,
    toggleTheme,
  });
};
