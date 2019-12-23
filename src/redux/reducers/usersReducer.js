import usersService from '../../services/users'

const usersReducer = (state =[], action) => {
  switch (action.type) {
    case 'NEW_USER':
      return [...state, action.data]
    case 'INIT_USERS':
      return [...state, action.data]
    default:
      return state
  }
}

// export const initializeUsers = () => {
//   return async dispatch => {
//     const users = await usersService.getAll()
//     dispatch({
//       type: 'INIT_USERS',
//       data: users,
//     })
//   }
// }

// const createAccount = async (event) => {
//   event.preventDefault()
//   return {
//     type: 'NEW_USER',
//     data:{
//       name,
//       username
//     }
//   }
//   try {
//     const newUserObject = {
//       password: password,
//       name: name,
//       username: username
//     }
//     await accountService.createAccount(newUserObject)
//     toggleUserButton()
//     createNotification(`Welcome ${newUserObject.name}, your account has been created.`, setSuccessMessage, 5000);
//   } catch (error) {
//     createNotification('username already taken', setErrorMessage, 5000);
//     console.log(error)
//   }
// }

export default usersReducer
