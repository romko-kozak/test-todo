import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { throttle } from 'lodash';
import { loadState, saveState } from './helpers/localStorage'
import reducer from './reducer';

const persistedState = loadState();

const store = configureStore({
    reducer: {
        todos: reducer,
    },
    middleware: [...getDefaultMiddleware(), logger],
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: (persistedState || {}),
})

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

export default store;