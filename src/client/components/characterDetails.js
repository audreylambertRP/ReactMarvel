import React, {PropTypes} from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
import {marvelSelector} from '../selectors/marvelHeroes'
import {goBack} from 'react-router-redux'

import {emptyHero} from '../actions/marvelHeroes'
import Photo from './photo'
import Content from './content'

export default class CharacterDetails extends React.Component {
 
    styles = {
      container: {
        display: 'flex',
        flexDirection: 'row',
        margin: '100px auto 0px',
        width: '75%',
      }
    }
    
    onMain = () => {
      this.props.dispatch(emptyHero())
      this.props.dispatch(goBack())
    }
    
    photoUrl = `${this.props.hero.thumbnail.path}.${this.props.hero.thumbnail.extension}`

    render() {
      const {hero} = this.props
      return (
        <div style={this.styles.container}>
          <Photo url={this.photoUrl} onMain={this.onMain} />
          <Content hero={hero} />
        </div>
      )
    }
}

CharacterDetails.propTypes = {
  hero: PropTypes.object.isRequired,
}

export default connect(marvelSelector) (CharacterDetails)
