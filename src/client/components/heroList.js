import React, {PropTypes} from 'react'
import _ from 'lodash'

import Hero from './hero'

const HeroList = ({heroes}) => {
  const listHeroes = _.map(heroes, (hero) => {
    return (
      <Hero key={hero.id} hero={hero} />
    )
  })

  return (
    <div>
      {listHeroes} 
    </div>
  )
}

HeroList.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired
    }).isRequired
  })).isRequired
}

export default HeroList
