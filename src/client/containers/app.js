import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {loadHeroes} from '../actions/marvelHeroes' 
import {marvelSelector} from '../selectors/marvelHeroes'

export default class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(loadHeroes())
  }

  render() {
    const {heroes} = this.props
    console.log('heroes = ', heroes)
    return (
      <div>
        Test APP
        <div>First hero is: {heroes[0]}</div>
      </div>
    )
  }
}

App.propTypes = {
  heroes: PropTypes.array.isRequired,
} 

export default connect(marvelSelector) (App)
