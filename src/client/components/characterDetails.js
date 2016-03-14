import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {marvelSelector} from '../selectors/marvelHeroes'
import Photo from './photo'
import Content from './content'

const CharacterDetails = ({hero/*, onMain*/}) => {
    const handleMain = (e) => {
      e.preventDefault()
      onMain()
    }
    const photoUrl = `${hero.thumbnail.path}.${hero.thumbnail.extension}`

    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'row',
        margin: '100px auto 0px',
        width: '75%',
      }
    }

    return (
    <div style={styles.container}>
      <Photo url={photoUrl} /*onMain={onMain}*/ />
      <Content hero={hero} />
    </div>
  )
}

CharacterDetails.propTypes = {
  hero: PropTypes.object.isRequired,
  //onMain: PropTypes.func.isRequired
}

export default connect(marvelSelector) (CharacterDetails)
//export default CharacterDetails
