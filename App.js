import React from 'react';
import Navigation from './Navigation/Navigation'
import {Provider} from 'react-redux';
import Store from './STORE/configureStore'

export default function App() {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
}


