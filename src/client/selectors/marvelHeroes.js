import {createSelector} from 'reselect'

const heroes = state => state.heroes

export const marvelSelector = createSelector(heroes, (heroes) => {
  return {
    heroes
  }
})
