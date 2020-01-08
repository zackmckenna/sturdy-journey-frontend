import * as actionTypes from '../actionTypes'

const sessionReducer = (state =[], action) => {
  console.log(action.type)
  console.log(action.data)
  switch (action.type) {
  case actionTypes.SET_LOCAL_USER_STATE:
    console.log('setting local user')
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
  default:
    return state
  }
}

export default sessionReducer
