import notesService from '../../services/notes'

const noteReducer = (state =[], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return state.concat(action.data)
    case 'INIT_NOTES':
      return state.concat(action.data)
    default:
      return state
  }
}

export const initializeNotes = () => {
  return async dispatch => {
    const notes = await notesService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: notes,
    })
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
