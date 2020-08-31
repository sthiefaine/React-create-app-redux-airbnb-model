import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from 'src/containers/App';
import store from 'src/store';

import * as serviceWorker from './serviceWorker';

import 'src/styles/index.scss';

const rootReactElement = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
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
