import React from 'react';
import MainNavigator from './src/navigation';
import { Provider } from 'react-redux';
import { useScreens } from 'react-native-screens';

import { store } from './src/store';

useScreens();

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
