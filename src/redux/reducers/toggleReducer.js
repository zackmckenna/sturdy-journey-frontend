import * as actionTypes from "../actionTypes"

const toggleReducer = (state = {
  showCreateNoteForm : false,
  showCreateUserForm: false,
  showLoginForm: false,
  showLogo: true
}, action) => {
  switch(action.type) {
    case actionTypes.TOGGLE_CREATE_USER_FORM:
      console.log(action.data)
      return {...state, showCreateUserForm: action.data}
    case actionTypes.TOGGLE_NEW_NOTE_FORM:
      console.log(action.data)
      return {...state, showCreateNoteForm: action.data}
    case actionTypes.TOGGLE_LOGIN_FORM:
      return {...state, showLoginForm: action.data}
    case 'TOGGLE_LOGO':
      return {...state, showLogo: action.data}
    default:
      return state
  }
}

export default toggleReducer
