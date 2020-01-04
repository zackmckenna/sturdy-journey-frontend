import notesService from '../services/notes'
import loginService from '../services/login'
import socket from '../socket/socket'
import { setLocalUserState, logout } from '../redux/actionCreators'

import connect from 'react-redux'


// export const setUser = async () => {
//     console.log('set user run')
//     const loggedAppUserJSON = window.localStorage.getItem('loggedAppUser')
//     if (loggedAppUserJSON) {
//       const user = JSON.parse(loggedAppUserJSON)
//       notesService.setToken(user.token)
//       setUserState(user)
//     }
//   }

export const loginUser = async (username, password) => {
  console.log('logging in . . .')
  console.log(username)
  console.log(password)
    const user = await loginService.login({
      username, password
    })
    window.localStorage.setItem('loggedAppUser', JSON.stringify(user))
    // const loggedAppUserJSON = await window.localStorage.getItem('loggedAppUser')
    if (user) {
      // const user = JSON.parse(loggedAppUserJSON)
      notesService.setToken(user.token)
      await setLocalUserState(user)
    }
    socket.emit('add_user', {username: user.username, name: user.name, userId: user.id})
}

export const removeUserFromSession = (user) => {
    socket.emit('remove_user', {username:user.username, name: user.name, id: user.id})
    window.localStorage.removeItem('loggedAppUser')
    logout()
  }


// export const loginUser = (username, password) => {
//   return async dispatch => {
//     const user = await loginService.login({
//       username, password
//     })
//     window.localStorage.setItem('loggedAppUser', JSON.stringify(user))
//     socket.emit('add_user', {username: user.username, name: user.name, userId: user.id})
//     dispatch(userIsLoggedIn())
//     dispatch(setUser(user))
//     dispatch(toggleLoginForm())
//     dispatch(toggleLogo())
//   }
// }


