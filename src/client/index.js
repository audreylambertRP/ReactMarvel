import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import {Provider} from 'react-redux'
import reducer from './reducers'
import App from './containers/app'
require('whatwg-fetch')

const store = createStore (
                reducer,
                undefined,
                applyMiddleware(thunk, createLogger())
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("myApp")
);
