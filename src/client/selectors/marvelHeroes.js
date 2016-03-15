import {createSelector} from 'reselect'

const heroes = state => state.heroesReducer.heroes
const hero = state => state.heroesReducer.hero

export const marvelSelector = createSelector(
  heroes, hero, (heroes, hero) => {
    return {
      heroes,
      hero
    }
})
