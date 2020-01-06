import * as actionTypes from './actionTypes'
import notesService from '../services/notes'
import rolesService from '../services/roles'
import gamesService from '../services/bitGame'
import usersService from '../services/users'
import accountService from '../services/account'

export const logout = () => (dispatch) => {
  console.log('logging out...')
  dispatch(removeUserFromRedux())
  dispatch(toggleLoginForm())
}

export const setLocalUserState = (user) => {
  return {
    type: actionTypes.SET_LOCAL_USER_STATE,
    data: user
  }
}

export const setErrorMessage = (message) => {
  return {
    type: 'SET_ERROR_ALERT',
    data: message
  }
}

export const setSuccessMessage = (message) => {
  return {
    type: 'SET_SUCCESS_MESSAGE',
    data: message
  }
}

export const clearAlert = () => {
  return {
    type: 'CLEAR_ALERT'
  }
}

export const setAlert = (message, error) => (dispatch) => {
  console.log('setting alert')
  if (error === true) {
    dispatch(setErrorMessage(message))
    setTimeout(() => {
      dispatch(clearAlert())
    }, 5000)
  } else {
    dispatch(setSuccessMessage(message))
    setTimeout(() => {
      dispatch(clearAlert())
    }, 5000)
  }
}

export const toggleCreateUserForm = (data) => {
  console.log('user form toggled to', data)
  return {
    type: actionTypes.TOGGLE_CREATE_USER_FORM,
    data: data
  }
}

export const toggleLoginForm = (data) => {
  console.log('login toggled to', data)
  return {
    type: actionTypes.TOGGLE_LOGIN_FORM,
    data: data
  }
}

export const toggleLogo = (data) => {
  console.log('logo toggled to', data)
  return {
    type: 'TOGGLE_LOGO',
    data: data
  }
}

export const toggleNewNoteForm = (data) => {
  console.log('new note form')
  return {
    type: actionTypes.TOGGLE_NEW_NOTE_FORM,
    data: data
  }
}
function removeUserFromRedux() {
  return{
    type: actionTypes.REMOVE_USER,
    data: null
  }
}

export const setCurrentUsers = (currentUsers) => {
  console.log('setting current users')
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

export const deleteNote = (event) => {
  event.preventDefault()
  return async dispatch => {
    if(window.confirm('are you sure you want to delete note?')) {
      console.log(event.target.id)
    }
    await notesService.deleteNote(event.target.id)
    // createNotification(`note deleted`, setSuccessMessage, 5000)
    dispatch(initializeNotes())
  }
}

export const submitNote = (note, user) => {
  return async dispatch => {
    console.log(note, user)
    try{
      const newNoteObject = {
        content: note,
        user: user
      }
      await notesService.create(newNoteObject)
      // createNotification('Note has been added', setSuccessMessage, 5000)
      dispatch(initializeNotes())
    } catch(exception) {
      console.log(exception)
    }
  }
}
