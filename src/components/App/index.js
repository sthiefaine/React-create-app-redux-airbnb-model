// == Import npm
import React, {
  useEffect,
} from 'react';

import LanguageSelector from 'src/components/Language';
import ThemeSelector from 'src/components/Theme';
// == Import;
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

  return (
    <Wrapper className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <LanguageSelector />
        <ThemeSelector />

        <Counter />

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
          ,<span> <Translate trId="and" /> </span>
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
