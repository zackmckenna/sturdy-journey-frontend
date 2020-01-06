import * as actionTypes from '../actionTypes'
import { removeUserFromRedux, toggleLoginForm } from './sessionActions'

export const registerUserAction = (user) => {
  return {
    type: actionTypes.REGISTER_USER,
    user
  }
};

export const loginUserAction = (user) => {
  return {
    type: actionTypes.LOGIN_USER,
    user
  }
};

export const logout = () => (dispatch) => {
  console.log('logging out...')
  dispatch(removeUserFromRedux())
  dispatch(toggleLoginForm())
}
