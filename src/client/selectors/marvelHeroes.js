import {createSelector} from 'reselect'

const heroes = state => state.heroes
const hero = state => state.hero
const rendering = state => state.rendering

export const marvelSelector = createSelector(
  heroes, hero, rendering, (heroes, hero, rendering) => {
    return {
      heroes,
      hero,
      rendering
    }
})
