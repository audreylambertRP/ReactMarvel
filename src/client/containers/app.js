import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory as history} from 'react-router'

import {marvelSelector} from '../selectors/marvelHeroes'
import Main from '../components/main'
import CharacterDetails from '../components/characterDetails'

const App = (props) => {
  return (
    <Router history={history}>
      <Route path='/'>
        <IndexRoute component={Main} />
        <Route path='character/:id' component={CharacterDetails} />
      </Route>
    </Router>
  )
}

export default connect(marvelSelector) (App)
