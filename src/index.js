import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
// Import the Provider component from 'react-redux', which is used to connect React and Redux
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>{/*The Provider component makes the Redux store available to the entire React app. */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);