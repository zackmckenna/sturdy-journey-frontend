import * as actionTypes from '../actionTypes'
import rolesService from '../../services/roles'

export const initializeRoles = () => {
  return async dispatch => {
    function onSuccess(success) {
      dispatch({
        type: actionTypes.ROLES_INIT,
        data: success })
    }
    function onError(error) {
      dispatch({
        type: actionTypes.ROLES_FAILED,
      })
    }
    try {
      dispatch({
        type: actionTypes.ROLES_LOADING
      })
      const success = await rolesService.getAll()
      return onSuccess(success)
    } catch (error) {
      return onError(error)
    }
  }
}
