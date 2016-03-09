import {HEROES_LOADED} from '../actions/marvelHeroes'

const initialState = {
  heroes: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'HEROES_LOADED':
      return {
        ...state,
        heroes: action.heroes
    }
    default:
      return state
  }
}
