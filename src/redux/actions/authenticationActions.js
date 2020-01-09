import * as actionTypes from '../actionTypes'
import { removeUserFromRedux, toggleLoginForm } from './sessionActions'
// import loginService from '../../services/login'
// import notesService from '../../services/notes'
// import socket from '../../socket/socket'
// import { setAlert } from './notificationActions'

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

// export const loginUser = (username, password) => (dispatch) =>  {
//   return async dispatch => {
//     function onSuccess(user) {
//       dispatch({
//         type: actionTypes.LOGIN_USER,
//         data: user })
//     }
//     function onError(error) {
//       dispatch({
//         type: actionTypes.LOGIN_FAILED,
//       })
//     }
//     function loginLoading() {
//       dispatch ({
//         type: actionTypes.LOGIN_LOADING
//       })
//     }
//     try {
//       loginLoading()
//       console.log('hit login action')
//       const user = await loginService.login({
//         username, password
//       })
//       dispatch(setLocalUserState(user))
//       dispatch(setAlert(`Welcome ${username}!`, false))
//       window.localStorage.setItem('loggedAppUser', JSON.stringify(user))
//       if (user) {
//         notesService.setToken(user.token)
//       }
//       socket.emit('add_user', { username: user.username, name: user.name, userId: user.id })
//       return onSuccess(user)
//     } catch (error) {
//       return onError(error)
//     }
//   }
// }
// const user = await window.localStorage.getItem('loggedAppUser')
//       dispatch(setLocalUserState(JSON.parse(user)))
//       dispatch(setAlert(`Welcome ${values.username}!`, false))
//       history.push('/game_lobby')

