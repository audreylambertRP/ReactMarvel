import React, {PropTypes} from 'react'

import Photo from './photo'
import Content from './content'

const CharacterDetails = ({hero, onMain}) => {
    const handleMain = (e) => {
      e.preventDefault()
      onMain()
    }
    const photoUrl = `${hero.thumbnail.path}.${hero.thumbnail.extension}`

    return (
    <div>
    on entre dans Character Details
      <Photo url={photoUrl} onMain={onMain} />
      <Content hero={hero} />
    </div>
  )
}

CharacterDetails.propTypes = {
  hero: PropTypes.object.isRequired,
  onMain: PropTypes.func.isRequired
}

export default CharacterDetails
