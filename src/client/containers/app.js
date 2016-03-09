import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {loadHeroes} from '../actions/marvelHeroes' 
import {marvelSelector} from '../selectors/marvelHeroes'

import Title from '../components/title'
import HeroList from '../components/heroList'

export default class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(loadHeroes())
  }

  render() {
    const {heroes} = this.props
    console.log('heroes in container/app.js = ', heroes)
    return (
      <div>
        <Title />
        <HeroList heroes={heroes} />
      </div>
    )
  }
}

App.propTypes = {
  heroes: PropTypes.array.isRequired,
} 

export default connect(marvelSelector) (App)
