import React from 'react';
import './App.css';
import {Main} from './components/Main';
import {Provider} from 'react-redux';
import Store from './configureStore'

function App() {
  return (
    <Provider store={Store}>
      <Main />
    </Provider>
  );
}

export default App;
