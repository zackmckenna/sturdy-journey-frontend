import * as actionTypes from '../actionTypes'
import gameService from '../../services/bitGame'

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
    return { ...state, games: action.data }
  default:
    return state
  }
}

export const initializeGames = () => {
  return async dispatch => {
    function onSuccess(success) {
      dispatch({
        type: actionTypes.GAMES_INIT,
        data: success })
    }
    function onError(error) {
      dispatch({
        type: actionTypes.GAMES_FAILED,
      })
    }
    try {
      dispatch({
        type: actionTypes.GAMES_LOADING
      })
      const success = await gameService.getAll()
      return onSuccess(success)
    } catch (error) {
      return onError(error)
    }
  }
}

export default gameReducer
