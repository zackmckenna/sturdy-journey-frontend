import notesService from '../../services/notes'
import loginService from '../../services/login'

const sessionReducer = (state =[], action) => {
  switch (action.type) {
    case 'SET_USER':
      return {...state, localUser: action.data}
    case 'REMOVE_USER':
      return {...state, localUser: null}
    case 'SET_CURRENT_USERS':
      return  {...state, currentUsers: action.data}
    case 'SET_CURRENT_NUMBER_PLAYERS':
      return {...state, currentNumberPlayers: action.data}
    case 'SET_CURRENT_PLAYER_ROLES':
      return {...state, currentPlayerRoles: action.data}
    case 'ADD_CHAT_MESSAGE':
      return {...state, messages: action.data}
    case 'LOGIN_USER':
      return state
    default:
      return state
  }
}

export const setUser = () => {
  return async dispatch => {
    console.log('set user run')
    const loggedAppUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedAppUserJSON) {
      const user = JSON.parse(loggedAppUserJSON)
      notesService.setToken(user.token)
      dispatch({
        type:'SET_USER',
        data: user
      })
    }
  }
}

export const addChatMessage = (message, user) => {
  return({
    type: 'ADD_CHAT_MESSAGE',
    data: {message: message,
          user: user}
  })
}

export const removeUser = () => {
  window.localStorage.removeItem('loggedAppUser')
  return({
    type: 'REMOVE_USER',
    data: null
  })
}
export const setCurrentUsers = (currentUsers) => {
  console.log('setting current users')
  console.log(currentUsers)
  return({
    type:'SET_CURRENT_USERS',
    data: currentUsers
  })
}

export const setCurrentNumberPlayers = (currentNumberPlayers) => {
  console.log('setting number players', currentNumberPlayers)
  return ({
    type: 'SET_CURRENT_NUMBER_PLAYERS',
    data: currentNumberPlayers
  })
}

export const setCurrentPlayerRoles = (currentPlayerRoles) => {
  console.log('setting roles', currentPlayerRoles)
  return({
    type: 'SET_CURRENT_PLAYER_ROLES',
    data: currentPlayerRoles
  })
}

export default sessionReducer
