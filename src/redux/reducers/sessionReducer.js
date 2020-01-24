import * as actionTypes from '../actionTypes'

const sessionReducer = (state =[], action) => {
  switch (action.type) {
  case actionTypes.LOGIN_LOADING:
    return { ...state, loginLoading: true }
  case actionTypes.LOGIN_SUCCESS:
    return { ...state, loginLoading: false }
  case actionTypes.SET_LOCAL_USER_STATE:
    return { ...state, localUser: action.data }
  case actionTypes.REMOVE_USER:
    return { ...state, localUser: null }
  case actionTypes.SET_CURRENT_USERS:
    return  { ...state, currentUsers: action.data }
  case actionTypes.SET_CURRENT_NUMBER_PLAYERS:
    return { ...state, currentNumberPlayers: action.data }
  case actionTypes.SET_CURRENT_PLAYER_ROLES:
    return { ...state, currentPlayerRoles: action.data }
  case actionTypes.CLEAR_CURRENT_PLAYER_ROLES:
    return { ...state, currentPlayerRoles: null }
  case actionTypes.ADD_CHAT_MESSAGE:
    return { ...state, messages: action.data }
  case actionTypes.START_GAME:
    return { ...state, inGame: true }
  case actionTypes.END_GAME:
    return { ...state, inGame: false }
  default:
    return state
  }
}

export default sessionReducer
