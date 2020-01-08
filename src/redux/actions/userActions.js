import * as actionTypes from '../actionTypes'
import usersService from '../../services/users'

export const initializeUsers = () => {
  return async dispatch => {
    const users = await usersService.getAll()
    dispatch({
      type: actionTypes.USERS_INIT,
      data: users,
    })
  }
}
