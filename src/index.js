// react and the react-DOM are required for for your application to work.
import React from 'react'
import ReactDOM from 'react-dom'

// here we import redux and the redux store file
import { Provider } from 'react-redux'
import store from './store'

import './index.css'
import App from './App'


import { fetchSomething } from './actions'

let newStore = store();

// this statement puts your fetched data into the store
newStore.dispatch(fetchSomething())

ReactDOM.render(

  <Provider store={newStore}>
    <App />
  </Provider>, document.getElementById('root')

);
