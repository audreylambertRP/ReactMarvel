import {
  HEROES_LOADED,
  EMPTY_HERO,
  LOAD_HERO
} from '../actions/marvelHeroes'

const initialState = {
  heroes: [],
  hero: {},
}

function heroesReducer(state = initialState, action) {
  switch (action.type) {
    case 'HEROES_LOADED':
      return {
        ...state,
        heroes: action.heroes
    }
    case 'EMPTY_HERO':
      return {
        ...state,
        hero: action.hero
    }
    case 'LOAD_HERO':
      return {
      ...state,
      hero: action.hero
    }
    default:
      return state
  }
}

export default heroesReducer
