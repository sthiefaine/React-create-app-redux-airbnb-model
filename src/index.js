import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import store from 'src/store';

import { LanguageProvider } from 'src/context/languages';
import { ThemeProvider } from 'src/context/themes';

import App from 'src/containers/App';

// == Import : Router
import { BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import 'src/styles/index.scss';

const rootReactElement = (
  <React.StrictMode>
    <Provider store={store}>

      <LanguageProvider>
        <ThemeProvider>
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </LanguageProvider>

    </Provider>
  </React.StrictMode>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
