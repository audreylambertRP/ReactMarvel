import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {
  loadHeroes,
  loadHero,
  loadMainPage,
  loadCharacterPage
} from '../actions/marvelHeroes' 
import {marvelSelector} from '../selectors/marvelHeroes'
import Main from '../components/main'
import CharacterDetails from '../components/characterDetails'

export default class App extends React.Component {
  componentWillMount() {
      this.props.dispatch(loadHeroes())
  }

  handleDetails = (id) => {
    this.props.dispatch(loadCharacterPage())
    this.props.dispatch(loadHero(id))
  }

  handleBackToList = () => {
    this.props.dispatch(loadMainPage())
  }

  render() {
    const {heroes, hero, rendering} = this.props

    //console.log ('hero in container/app.js = ', hero)
    //console.log('heroes in container/app.js = ', heroes)
    
    return (
      <div>
        {
          (
            rendering === 'main'
            ? <Main heroes={heroes} onDetails={this.handleDetails}/>
            : (hero.thumbnail) ? <CharacterDetails hero={hero} onMain={this.handleBackToList}/>
                 : <div />
          )
        }
      </div>
    )
  }
}

App.propTypes = {
  heroes: PropTypes.array.isRequired,
  hero: PropTypes.object,
  rendering: PropTypes.string.isRequired
} 

export default connect(marvelSelector) (App)
