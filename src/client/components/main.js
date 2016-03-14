import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {marvelSelector} from '../selectors/marvelHeroes'
import {push} from 'react-router-redux'
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

    handleDetail = (id) => {
      this.props.dispatch(push('/character/' + id))
    }

    render() {
      const {heroes} = this.props

      return (
        <div style={this.styles.container}>
          <Title />
          <HeroList heroes={heroes} onDetail={this.handleDetail} />
        </div>
      )
  }
}

Main.propTypes = {
  heroes: PropTypes.array.isRequired,
}

export default connect(marvelSelector) (Main)
