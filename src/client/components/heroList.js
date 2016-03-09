import React, {PropTypes} from 'react'
import _ from 'lodash'

import Hero from './hero'
import Title from './title'

const HeroList = ({heroes}) => {
  
  const styles = {
    list: {
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     flexDirection: 'row',
     flexWrap: 'wrap'
    }
  }
  
  const listHeroes = _.map(heroes, (hero) => {
    return (
      <Hero key={hero.id} hero={hero} />
    )
  })

  return (
    <div style={styles.list}>
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
