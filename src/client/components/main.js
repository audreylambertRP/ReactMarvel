import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {marvelSelector} from '../selectors/marvelHeroes'
import HeroList from '../components/heroList'
import Title from '../components/title'

const Main = ({heroes/*, onDetails*/}) => {
  const styles = {
    container: {
      width: '80%',
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto'
    }
  }

  return (
    <div style={styles.container}>
      <Title />
      <HeroList heroes={heroes} /*onDetails={onDetails}*//>
    </div>
  )
}

Main.propTypes = {
  heroes: PropTypes.array.isRequired,
  //onDetails: PropTypes.func.isRequired
}

export default connect(marvelSelector) (Main)
