export const HEROES_LOADED = 'HEROES_LOADED'

export function loadHeroes() {
  return (dispatch, getState) => {
    dispatch(heroesLoaded(['Ironman', 'Thor', 'Superman', 'Spiderman', 'JessicaJones']))
  }
}

export function heroesLoaded(heroes) {
  return {
    type: HEROES_LOADED,
    heroes
  }
}
