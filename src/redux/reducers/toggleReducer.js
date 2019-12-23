import { actionTypes } from "react-redux-form"

const toggleReducer = (state = [{
  showCreateNoteForm : false,
  showCreateUserForm: true,
  showLoginForm: false
}], action) => {
  switch(action.data) {
    case actionTypes.TOGGLE_CREATE_USER_FORM:
      return {...state, showCreateUserForm: !state.showCreateUserForm}
    case actionTypes.TOGGLE_CREATE_NOTE_FORM:
      return {...state, showCreateNoteForm: !state.showCreateNoteForm}
    case actionTypes.TOGGLE_LOGIN_FORM:
      console.log('reducer toggled')
      console.log(state.showLoginForm)
      return {...state, showLoginForm: !state.showLoginForm}
    default:
      return state
  }

}

export default toggleReducer
