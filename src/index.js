import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import store from './store'

let newStore = store();

ReactDOM.render(

  <Provider store={newStore}>
    <App />
  </Provider>, document.getElementById('root')

);
