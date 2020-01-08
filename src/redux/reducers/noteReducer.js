import * as actionTypes from '../actionTypes'

const noteReducer = (state =[], action) => {
  switch (action.type) {
  case 'NEW_NOTE':
    return state.concat(action.data)
  case actionTypes.NOTES_INIT:
    return action.data
  default:
    return state
  }
}

export default noteReducer
