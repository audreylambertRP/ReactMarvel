import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {loadHeroes} from '../actions/marvelHeroes' 
import {marvelSelector} from '../selectors/marvelHeroes'

import HeroList from '../components/heroList'
import Title from '../components/title'

export default class App extends React.Component {
  componentWillMount() {
    this.props.dispatch(loadHeroes())
  }

  render() {
    const {heroes} = this.props

    const styles = {
      container: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto'
      }
    }
    
    console.log('heroes in container/app.js = ', heroes)
    return (
      <div style={styles.container}>
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
