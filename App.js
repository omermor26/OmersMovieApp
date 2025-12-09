import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';
import {store} from "./src/data/appData";
import { Provider } from "react-redux";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#121212',
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <NavigationContainer theme={MyTheme}>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}
