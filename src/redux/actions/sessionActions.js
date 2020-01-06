import * as actionTypes from '../actionTypes'

export const removeUserFromRedux = () => {
  return{
    type: actionTypes.REMOVE_USER,
    data: null
  }
}


export const setLocalUserState = (user) => {
  return {
    type: actionTypes.SET_LOCAL_USER_STATE,
    data: user
  }
}

export const toggleLoginForm = (data) => {
  console.log('login toggled to', data)
  return {
    type: actionTypes.TOGGLE_LOGIN_FORM,
    data: data
  }
}

export const setCurrentNumberPlayers = (currentNumberPlayers) => {
  console.log('setting number players', currentNumberPlayers)
  return ({
    type: actionTypes.SET_CURRENT_NUMBER_PLAYERS,
    data: currentNumberPlayers
  })
}


export const setCurrentPlayerRoles = (currentPlayerRoles) => {
  console.log('setting roles', currentPlayerRoles)
  return({
    type: actionTypes.SET_CURRENT_PLAYER_ROLES,
    data: currentPlayerRoles
  })
}

export const setCurrentUsers = (currentUsers) => {
  console.log('setting current users')
  return({
    type:actionTypes.SET_CURRENT_USERS,
    data: currentUsers
  })
}
