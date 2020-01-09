import * as actionTypes from '../actionTypes'

const noteReducer = (state = {
  isLoading: true,
  errMess: null,
  roles: [] }, action) => {
  switch (action.type) {
  case actionTypes.NEW_NOTE:
    return state.concat(action.data)
  case actionTypes.NOTES_FAILED:
    return { ...state, isLoading: false, errMess: action.data }
  case actionTypes.NOTES_LOADING:
    return { ...state, isLoading: true, errMess: null, roles: [] }
  case actionTypes.NOTES_INIT:
    return { ...state, isLoading: false, notes: action.data }
  default:
    return state
  }
}

export default noteReducer
