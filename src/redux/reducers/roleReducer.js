import * as actionTypes from '../actionTypes'

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
    return { ...state, isLoading: false, roles: action.data }
  default:
    return state
  }
}

export default roleReducer
