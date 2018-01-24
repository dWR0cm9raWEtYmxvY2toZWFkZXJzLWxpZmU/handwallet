import React from 'react';
import Stack from './src'
import todoApps from './src/reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(todoApps)

export default class App extends React.Component {
  render() {
      return (
	  <Provider store={store}>
	      <Stack />
	  </Provider>
    );
  }
}
