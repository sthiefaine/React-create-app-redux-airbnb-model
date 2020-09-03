// == Import npm
import React, {
  useEffect,
} from 'react';

import {
  useTheme,
} from 'src/context/themes';

// == Import;
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

  return (
    <Wrapper className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div
          className="button"
          id={currentTheme === 'dark' ? 'light' : 'dark'}
          onClick={handelOnClickChangeTheme}
        >{currentTheme === 'dark' ? 'Light' : 'Dark'} Theme
        </div>

        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
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
          ,<span> and </span>
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
