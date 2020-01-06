import * as actionTypes from '../actionTypes'
import { removeUserFromRedux, toggleLoginForm } from './sessionActions'

export const registerUserAction = (user) => ({
  type: actionTypes.REGISTER_USER,
  user
})

export const loginUserAction = (user) => ({
  type: actionTypes.LOGIN_USER,
  user
})

export const logout = () => (dispatch) => {
  console.log('logging out...')
  dispatch(removeUserFromRedux())
  dispatch(toggleLoginForm())
}
