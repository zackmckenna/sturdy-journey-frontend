import * as actionTypes from '../actionTypes'

import notesService from '../../services/notes'
import rolesService from '../../services/roles'
// import usersService from '../../services/users'

export const initializeRoles = () => {
  return async dispatch => {
    const roles = await rolesService.getAll()
    dispatch({
      type: actionTypes.ROLES_INIT,
      data: roles,
    })
  }
}

export const initializeNotes = () => {
  return async dispatch => {
    const notes = await notesService.getAll()
    dispatch({
      type: actionTypes.NOTES_INIT,
      data: notes,
    })
  }
}

// export const initializeUsers = () => {
//   return async dispatch => {
//     const users = await usersService.getAll()
//     dispatch({
//       type: actionTypes.USERS_INIT,
//       data: users,
//     })
//   }
// }
