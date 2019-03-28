import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

import { rootReducer } from './rootReducer';

const composeEnhancers =
  process.env.NODE_ENV === 'production'
    ? compose
    : composeWithDevTools({
        // Specify name here, actionsBlacklist, actionsCreators and other options if needed
      });

// For redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  //rootReducer,
  persistedReducer, // for redux persist
  composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
