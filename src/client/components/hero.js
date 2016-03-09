import React, {PropTypes} from 'react'

const Hero = ({hero}) => {
  return (
    <div>
      {hero.thumbnail.path}.{hero.thumbnail.extension}
    </div>
  )
}

Hero.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default Hero
