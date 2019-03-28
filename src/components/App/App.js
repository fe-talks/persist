import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'store';
import { MainWrapper } from 'components/MainWrapper';

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <MainWrapper />
      </PersistGate>
    </Provider>
  );
}

App.defaultProps = {};

App.propTypes = {};

App.displayName = 'App';
