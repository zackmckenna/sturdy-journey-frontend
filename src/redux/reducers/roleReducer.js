import rolesService from '../../services/roles'

const roleReducer = (state =[], action) => {
  switch (action.type) {
    case 'NEW_ROLE':
      return state.concat(action.data)
    case 'INIT_ROLES':
      return state.concat(action.data)
  }
  return state
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
