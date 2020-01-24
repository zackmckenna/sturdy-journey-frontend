import * as actionTypes from '../actionTypes'

const airtableReducer = (state = {
  isLoading: true,
  errMess: null,
  eventCards: [],
  roleCards: [],
  itemCards: [] }, action) => {
  switch (action.type) {
  case actionTypes.AIRTABLE_FAILED:
    return { ...state, isLoading: false, errMess: action.data }
  case actionTypes.AIRTABLE_LOADING:
    return { ...state, isLoading: true, errMess: null, roles: [] }
  case actionTypes.AIRTABLE_INIT:
    return { ...state, isLoading: false, airtableDb: action.data }
  case actionTypes.AIRTABLE_EVENTCARDS_FAILED:
    return { ...state, isLoading: false, errMess: action.data }
  case actionTypes.AIRTABLE_EVENTCARDS_LOADING:
    return { ...state, isLoading: true, errMess: null, eventCards: [] }
  case actionTypes.AIRTABLE_EVENTCARDS_INIT:
    return { ...state, isLoading: false, eventCards: action.data }
  case actionTypes.AIRTABLE_ITEMCARDS_FAILED:
    return { ...state, isLoading: false, errMess: action.data }
  case actionTypes.AIRTABLE_ITEMCARDS_LOADING:
    return { ...state, isLoading: true, errMess: null, itemCards: [] }
  case actionTypes.AIRTABLE_ITEMCARDS_INIT:
    return { ...state, isLoading: false, itemCards: action.data }
  case actionTypes.AIRTABLE_ROLECARDS_FAILED:
    return { ...state, isLoading: false, errMess: action.data }
  case actionTypes.AIRTABLE_ROLECARDS_LOADING:
    return { ...state, isLoading: true, errMess: null, roleCards: [] }
  case actionTypes.AIRTABLE_ROLECARDS_INIT:
    return { ...state, isLoading: false, roleCards: action.data }
  default:
    return state
  }
}

export default airtableReducer
