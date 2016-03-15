import React, {PropTypes} from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import {marvelSelector} from '../selectors/marvelHeroes'
import {push} from 'react-router-redux'

import {loadHero} from '../actions/marvelHeroes'
import HeroList from '../components/heroList'
import Title from '../components/title'

export default class Main extends React.Component {
 
    styles = {
      container: {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto'
      }
    }

    onDetail = (id) => {
      this.props.dispatch(loadHero(id))
      this.props.dispatch(push('/character/' + id))
    }

    render() {
      const {heroes} = this.props

      return (
        <div style={this.styles.container}>
          <Title />
          <HeroList heroes={heroes} onDetail={this.onDetail} />
        </div>
      )
  }
}

Main.propTypes = {
  heroes: PropTypes.array.isRequired,
}

export default connect(marvelSelector) (Main)
