import * as actionTypes from '../actionTypes'

const noteReducer = (state =[], action) => {
  switch (action.type) {
  case 'NEW_NOTE':
    return state.concat(action.data)
  case actionTypes.INIT_NOTES:
    return action.data
  default:
    return state
  }
}
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

export default noteReducer
