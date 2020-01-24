import * as actionTypes from '../actionTypes'
import airtableService from '../../services/airtable'

export const initializeAirtableRoleCards = () => {
  return async dispatch => {
    function onSuccess(success) {
      dispatch({
        type: actionTypes.AIRTABLE_ROLECARDS_INIT,
        data: success })
    }
    function onError(error) {
      dispatch({
        type: actionTypes.AIRTABLE_ROLECARDS_FAILED,
      })
    }
    try {
      dispatch({
        type: actionTypes.AIRTABLE_ROLECARDS_LOADING
      })
      const success = await airtableService.getAllRoleCards()
      return onSuccess(success)
    } catch (error) {
      return onError(error)
    }
  }
}

export const initializeAirtableItemCards = () => {
  return async dispatch => {
    function onSuccess(success) {
      dispatch({
        type: actionTypes.AIRTABLE_ITEMCARDS_INIT,
        data: success })
    }
    function onError(error) {
      dispatch({
        type: actionTypes.AIRTABLE_ITEMCARDS_FAILED,
      })
    }
    try {
      dispatch({
        type: actionTypes.AIRTABLE_ITEMCARDS_LOADING
      })
      const success = await airtableService.getAllItemCards()
      return onSuccess(success)
    } catch (error) {
      return onError(error)
    }
  }
}

export const initializeAirtableEventCards = () => {
  return async dispatch => {
    function onSuccess(success) {
      dispatch({
        type: actionTypes.AIRTABLE_EVENTCARDS_INIT,
        data: success })
    }
    function onError(error) {
      dispatch({
        type: actionTypes.AIRTABLE_EVENTCARDS_FAILED,
      })
    }
    try {
      dispatch({
        type: actionTypes.AIRTABLE_EVENTCARDS_LOADING
      })
      const success = await airtableService.getAllEventCards()
      return onSuccess(success)
    } catch (error) {
      return onError(error)
    }
  }
}
