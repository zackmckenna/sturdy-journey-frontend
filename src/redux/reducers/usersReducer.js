import * as actionTypes from '../actionTypes'

const userReducer = (state = {
  isLoading: true,
  errMess: null,
  roles: [] }, action) => {
  switch (action.type) {
  case actionTypes.NEW_USER:
    return state.concat(action.data)
  case actionTypes.USERS_FAILED:
    return { ...state, isLoading: false, errMess: action.data }
  case actionTypes.USERS_LOADING:
    return { ...state, isLoading: true, errMess: null, roles: [] }
  case actionTypes.USERS_INIT:
    return { ...state, isLoading: false, users: action.data }
  default:
    return state
  }
}

export default userReducer
