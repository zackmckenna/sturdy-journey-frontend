import * as actionTypes from '../actionTypes'

const notificationReducer = (state =[], action) => {
  switch (action.type) {
  case actionTypes.SET_SUCCESS_MESSAGE:
    return { ...state, visible: true, error: false, message: action.data }
  case actionTypes.SET_ERROR_MESSAGE:
    return { ...state, visible: true, error: true, message: action.data }
  case actionTypes.CLEAR_NOTIFICATION:
    return { ...state, visible: false, error: false, message:'' }
  default:
    return state
  }
}

export default notificationReducer
