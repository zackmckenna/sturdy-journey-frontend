import * as actionTypes from '../actionTypes'

const gameReducer = (state = {
  isLoading: true,
  errMess: null,
  roles: [] }, action) => {
  switch (action.type) {
  case actionTypes.NEW_GAME:
    return state.concat(action.data)
  case actionTypes.GAMES_FAILED:
    return { ...state, isLoading: false, errMess: action.data }
  case actionTypes.GAMES_LOADING:
    return { ...state, isLoading: true, errMess: null, roles: [] }
  case actionTypes.GAMES_INIT:
    return { ...state, isLoading: false, games: action.data }
  default:
    return state
  }
}


export default gameReducer
