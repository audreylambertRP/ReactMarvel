import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory as history} from 'react-router'

/*import {
  loadHeroes,
  loadMainPage,
  loadCharacterPage
} from '../actions/marvelHeroes' */
import {marvelSelector} from '../selectors/marvelHeroes'
import Main from '../components/main'
import CharacterDetails from '../components/characterDetails'

/*export default class App extends React.Component {
  componentWillMount() {
      this.props.dispatch(loadHeroes())
  }

  handleDetails = (id) => {
    this.props.dispatch(loadCharacterPage(id))
  }

  handleBackToList = () => {
    this.props.dispatch(loadMainPage())
  }

  render() {
    const {heroes, hero, rendering} = this.props
    
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
*/ 

const App = (props) => {
 // if (!props.heroes) return <div />
  return (
    <Router history={history}>
      <Route path='/'>
        <IndexRoute component={Main} />
      </Route>
    </Router>
  )
}
        //<Route path='character/:id' component={CharacterDetails} />

export default connect(marvelSelector) (App)
