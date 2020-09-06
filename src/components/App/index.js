// == Import npm
import React, {
  useEffect,
} from 'react';

import { renderToString } from 'react-dom/server';

import {
  useTheme,
} from 'src/context/themes';

import LanguageSelector from 'src/components/Language';

// == Import;
import TranslateComponent from 'src/components/Translate';
import { Translate } from 'src/context/languages';
import Counter from 'src/containers/Counter';

import logo from 'src/assets/logo.svg';

import './styles.scss';
import Wrapper from 'src/styles/Wrapper';

// == Composant
const App = () => {
  useEffect(() => {
    document.title = 'React Redux Model';
    // eslint-disable-next-line no-console
    console.log('App - useEffect ');
  }, []);

  const {
    toggleTheme,
    currentTheme,
  } = useTheme();

  const handelOnClickChangeTheme = (event) => {
    return (
      toggleTheme(event.target.id)
    );
  };

  const test = () => {
    return (
      renderToString(<Translate trId="Learn" />)
    );
  };

  return (
    <Wrapper className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <LanguageSelector />
        <div
          className="button"
          id={currentTheme === 'dark' ? 'light' : 'dark'}
          onClick={handelOnClickChangeTheme}
        >{currentTheme === 'dark' ? <Translate trId="lightTheme" /> : <Translate trId="darkTheme" />}
        </div>

        <Counter />

        <input
          type="text"
          placeholder={TranslateComponent('Learn')}
        />

        <input
          type="text"
          placeholder={<Translate trId="Learn" />}
        />

        <span>
          <span><Translate trId="Learn" /> </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> <Translate trId="and" /> {TranslateComponent('and')} </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </Wrapper>
  );
};
// == Export
export default App;
