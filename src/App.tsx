import React from 'react';
import {Provider} from 'react-redux';

import FlashMessage from 'react-native-flash-message';

import PokedexNavigation from './navigation';
import { store } from './store';

const App = () => {

  return (
    <Provider store={store}>
      <PokedexNavigation />
      <FlashMessage position={'top'} duration={4000} />
    </Provider>
  );
};

export default App;
