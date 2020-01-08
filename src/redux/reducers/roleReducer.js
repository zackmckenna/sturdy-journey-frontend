import * as actionTypes from '../actionTypes'
import rolesService from '../../services/roles'

const roleReducer = (state = {
  isLoading: true,
  errMess: null,
  roles: [] }, action) => {
  switch (action.type) {
  case actionTypes.NEW_ROLE:
    return state.concat(action.data)
  case actionTypes.ROLES_FAILED:
    return { ...state, isLoading: false, errMess: action.data }
  case actionTypes.ROLES_LOADING:
    return { ...state, isLoading: true, errMess: null, roles: [] }
  case actionTypes.ROLES_INIT:
    return { ...state, roles: action.data }
  default:
    return state
  }
}

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
      const success = await rolesService.getAll()
      return onSuccess(success)
    } catch (error) {
      return onError(error)
    }
  }
}

export default roleReducer
