import * as actionTypes from '../actionTypes'
import rolesService from '../../services/roles'

const roleReducer = (state =[], action) => {
  switch (action.type) {
  case actionTypes.NEW_ROLE:
    return state.concat(action.data)
  case actionTypes.INIT_ROLES:
    return state.concat(action.data)
  default:
    return state
  }
}

export const initializeRoles = () => {
  return async dispatch => {
    const roles = await rolesService.getAll()
    dispatch({
      type: 'INIT_ROLES',
      data: roles,
    })
  }
}

export default roleReducer
