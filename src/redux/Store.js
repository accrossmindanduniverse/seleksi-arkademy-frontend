import { createStore, applyMiddleware } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import promiseMiddleware from 'redux-promise-middleware';
import { logger } from 'redux-logger';
import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(
  persistedReducer,
  applyMiddleware(promiseMiddleware, logger)
);

const persistor = persistStore(store);

export { store, persistor };