import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { sample, sampleTwo } from './reducers'

let middleware = [thunk, logger]


const rootReducer = combineReducers({
   sample: sample,
   sampleTwo: sampleTwo

 })

export default () => createStore(
  rootReducer,
  compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
