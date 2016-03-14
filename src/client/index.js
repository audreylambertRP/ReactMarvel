import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {routerMiddleware /*syncHistory*/} from 'react-router-redux'
import {browserHistory} from 'react-router'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import {Provider} from 'react-redux'

import rootReducer from './reducers/index'
import App from './containers/app'
require('whatwg-fetch')

const history = routerMiddleware(browserHistory)
const store = createStore (
                rootReducer,
                undefined,
                applyMiddleware(thunk, history, createLogger())
)

import {loadHeroes} from './actions/marvelHeroes'
store.dispatch(loadHeroes())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("myApp")
);
