import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Home from './src/Home';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
