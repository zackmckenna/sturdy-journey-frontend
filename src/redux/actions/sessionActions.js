import * as actionTypes from '../actionTypes'

export const removeUserFromRedux = () => ({
  type: actionTypes.REMOVE_USER,
  data: null
})

export const setLocalUserState = (user) => ({
  type: actionTypes.SET_LOCAL_USER_STATE,
  data: user
})

export const toggleLoginForm = (data) => ({
  type: actionTypes.TOGGLE_LOGIN_FORM,
  data: data
})

export const setCurrentNumberPlayers = (currentNumberPlayers) => ({
  type: actionTypes.SET_CURRENT_NUMBER_PLAYERS,
  data: currentNumberPlayers
})


export const setCurrentPlayerRoles = (currentPlayerRoles) => ({
  type: actionTypes.SET_CURRENT_PLAYER_ROLES,
  data: currentPlayerRoles
})

export const clearCurrentPlayerRoles = () => ({
  type: actionTypes.CLEAR_CURRENT_PLAYER_ROLES
})

export const setCurrentUsers = (currentUsers) => ({
  type:actionTypes.SET_CURRENT_USERS,
  data: currentUsers
})

