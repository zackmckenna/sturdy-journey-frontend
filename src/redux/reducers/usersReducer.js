import * as actionTypes from '../actionTypes'

const usersReducer = (state =[], action) => {
  switch (action.type) {
  case actionTypes.NEW_USER:
    return [...state, action.data]
  case actionTypes.INIT_USERS:
    return [...state, action.data]
  default:
    return state
  }
}

export default usersReducer
