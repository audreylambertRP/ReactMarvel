import {
  HEROES_LOADED,
  MAIN_PAGE_LOADED,
  CHARACTER_PAGE_LOADED
} from '../actions/marvelHeroes'

const initialState = {
  heroes: [],
  hero: {},
  rendering: 'main'
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'HEROES_LOADED':
      return {
        ...state,
        heroes: action.heroes
    }
    case 'MAIN_PAGE_LOADED':
      return {
        ...state,
        rendering: action.rendering,
        hero: action.hero
    }
    case 'CHARACTER_PAGE_LOADED':
      return {
      ...state,
      rendering: action.rendering,
      hero: action.hero
    }
    default:
      return state
  }
}
