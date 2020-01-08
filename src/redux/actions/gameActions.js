import * as actionTypes from '../actionTypes'
import gameService from '../../services/bitGame'

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
