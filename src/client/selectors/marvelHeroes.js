import {createSelector} from 'reselect'

const heroes = state => state.heroesReducer.heroes
const hero = state => state.heroesReducer.hero
//const rendering = state => state.rendering

export const marvelSelector = createSelector(
  heroes, hero/*, rendering*/, (heroes, hero/*, rendering*/) => {
    return {
      heroes,
      hero,
      //rendering
    }
})
