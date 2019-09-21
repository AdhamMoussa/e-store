import React from 'react';
import MainNavigator from './src/navigation';
import { useScreens } from 'react-native-screens';

useScreens();

export default function App() {
  return <MainNavigator />;
}
