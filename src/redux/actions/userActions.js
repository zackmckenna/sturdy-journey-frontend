import * as actionTypes from '../actionTypes'
import usersService from '../../services/users'

export const initializeUsers = () => {
  return async dispatch => {
    function onSuccess(success) {
      dispatch({
        type: actionTypes.USERS_INIT,
        data: success })
    }
    function onError(error) {
      dispatch({
        type: actionTypes.USERS_FAILED,
      })
    }
    try {
      dispatch({
        type: actionTypes.USERS_LOADING
      })
      const success = await usersService.getAll()
      return onSuccess(success)
    } catch (error) {
      return onError(error)
    }
  }
}
