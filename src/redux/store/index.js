// == Import : npm
import { configureStore } from '@reduxjs/toolkit';

// == Import : local
import reducer from '../reducers';
import logMiddleware from '../middlewares/logMiddleware';

// Pass in Redux store's state to save it to the user's browser local storage
const saveStorageData = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxModel', serializedState);
  }
  catch {
    // We'll just ignore write errors
  }
};

// Loads the state and returns an object that can be provided as the
// preloadedState parameter of store.js's call to configureStore
const getStorageData = () => {
  try {
    const serializedState = localStorage.getItem('reduxModel');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  }
  catch (error) {
    return undefined;
  }
};

const preloadedState = getStorageData();

// READ: https://redux.js.org/recipes/configuring-your-store
const store = configureStore({
  reducer,
  extraReducers: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
  enhancer: {},
  preloadedState,
});

export default store;

// We'll subscribe to state changes, saving the store's state to the browser's
// local storage. We'll throttle this to prevent excessive work.
store.subscribe(() => {
  saveStorageData(store.getState());
});
