import * as actionTypes from './actionTypes'
import notesService from '../services/notes'
import loginService from '../services/login'
import rolesService from '../services/roles'
import gamesService from '../services/bitGame'
import usersService from '../services/users'
import socket from '../socket/socket'

export const setUser = () => {
  return async dispatch => {
    console.log('set user run')
    const loggedAppUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedAppUserJSON) {
      const user = JSON.parse(loggedAppUserJSON)
      notesService.setToken(user.token)
      dispatch({
        type: actionTypes.SET_USER,
        data: user
      })
    }
  }
}

export const removeUser = () => {
  // await socket.emit('remove_user', {username:props.user.username, name: props.user.name, id: props.user.id})
  window.localStorage.removeItem('loggedAppUser')
  return({
    type: actionTypes.REMOVE_USER,
    data: null
  })
}

export const setCurrentUsers = (currentUsers) => {
  console.log('setting current users')
  console.log(currentUsers)
  return({
    type:actionTypes.SET_CURRENT_USERS,
    data: currentUsers
  })
}

export const sendChatMessage = (message, user) => {
  return({
    type: actionTypes.SEND_CHAT_MESSAGE,
    data: {message: message,
          user: user}
  })
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

export const initializeRoles = () => {
  return async dispatch => {
    const roles = await rolesService.getAll()
    dispatch({
      type: actionTypes.INIT_ROLES,
      data: roles,
    })
  }
}

export const initializeNotes = () => {
  return async dispatch => {
    const notes = await notesService.getAll()
    dispatch({
      type: actionTypes.INIT_NOTES,
      data: notes,
    })
  }
}

export const initializeGames = () => {
  return async dispatch => {
    const games = await gamesService.getAll()
    dispatch({
      type: actionTypes.INIT_GAMES,
      data: games,
    })
  }
}

export const initializeUsers = () => {
  return async dispatch => {
    const users = await usersService.getAll()
    dispatch({
      type: actionTypes.INIT_USERS,
      data: users,
    })
  }
}
