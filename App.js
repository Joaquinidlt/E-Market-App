import React from 'react';
import { store } from './store';
import { Provider } from "react-redux";
import TabNavigator from './navigation/TabNavigator'


export default function App() {
  return (
    <Provider store={store}>
      <TabNavigator/>
    </Provider>
  );
}
