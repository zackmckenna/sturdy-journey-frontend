import * as actionTypes from '../actionTypes'
import { removeUserFromRedux, toggleLoginForm } from './sessionActions'
import loginService from '../../services/login'
import notesService from '../../services/notes'
import socket from '../../socket/socket'
import { setAlert } from './notificationActions'

export const registerUserAction = (user) => ({
  type: actionTypes.REGISTER_USER,
  data: user
})

export const loginUserAction = (user) => ({
  type: actionTypes.LOGIN_USER,
  data: user
})

export const loginFailed = (error) => ({
  type: actionTypes.LOGIN_FAILED,
  data: error
})

export const logout = () => (dispatch) => {
  console.log('logging out...')
  dispatch(removeUserFromRedux())
  dispatch(toggleLoginForm())
}

export const loginUser = async (username, password) => {
  const user = await loginService.login({
    username, password
  })
  window.localStorage.setItem('loggedAppUser', JSON.stringify(user))
  if (user) {
    notesService.setToken(user.token)
  }
  socket.emit('add_user', { username: user.username, name: user.name, userId: user.id })
  // window.localStorage.state.setItem('localUSer', JSON.stringify(user))
}

// export const removeUserFromSession = (user) => {
//   socket.emit('remove_user', { username:user.username, name: user.name, id: user.id })
//   window.localStorage.removeItem('loggedAppUser')
// }

// export const createAccount = async (username, name, password) => {
//   const newUserObject = {
//     password: password,
//     name: name,
//     username: username
//   }
//   try{
//     const response = await accountService.createAccount(newUserObject)
//     console.log(response)
//   } catch (exception){
//     console.log('error:')
//     console.log(exception)
//   }
// }
