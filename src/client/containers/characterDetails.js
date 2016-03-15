import React, {PropTypes} from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'

import {detailSelector} from '../selectors/marvelHeroes'
import {loadHero, loadMainPage} from '../actions/marvelHeroes'
import Photo from '../components/photo'
import Content from '../components/content'

class CharacterDetails extends React.Component {
 
    componentWillMount() {
      const {dispatch, characterId} = this.props
      dispatch(loadHero(characterId))
    }
    
    onMain = () => {
      this.props.dispatch(loadMainPage())
    }

    styles = {
      container: {
        display: 'flex',
        flexDirection: 'row',
        margin: '100px auto 0px',
        width: '75%',
      }
    }

    render() {
      const {hero} = this.props
      if (!hero) return <div />
      const photoUrl = `${hero.thumbnail.path}.${hero.thumbnail.extension}`
      return (
        <div style={this.styles.container}>
          <Photo url={photoUrl} onMain={this.onMain} />
          <Content hero={hero} />
        </div>
      )
    }
}

CharacterDetails.propTypes = {
  hero: PropTypes.object,
}

export default connect(detailSelector) (CharacterDetails)
