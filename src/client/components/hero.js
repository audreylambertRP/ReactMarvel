import React, {PropTypes} from 'react'

import Redirections from './redirections'

const Hero = ({hero}) => {
  const photoUrl = `${hero.thumbnail.path}.${hero.thumbnail.extension}`
  
  const styles = {
    picture: {
      width: '304px',
      height: '228px'
    }
  }

  return (
    <div>
      <img src={photoUrl} alt="heroImage" style={styles.picture} />
      <div>{hero.name}</div>
      <Redirections hero={hero} />
    </div>
  )
}

Hero.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.number,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default Hero
