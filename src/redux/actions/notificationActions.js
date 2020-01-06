import * as actionTypes from '../actionTypes'

export const setErrorMessage = (message) => ({
  type: 'SET_ERROR_ALERT',
  data: message
})

export const setSuccessMessage = (message) => ({
  type: 'SET_SUCCESS_MESSAGE',
  data: message
})

export const clearAlert = () => ({
  type: 'CLEAR_ALERT'
})

export const setAlert = (message, error) => (dispatch) => {
  console.log('setting alert')
  if (error === true) {
    dispatch(setErrorMessage(message))
    setTimeout(() => {
      dispatch(clearAlert())
    }, 5000)
  } else {
    dispatch(setSuccessMessage(message))
    setTimeout(() => {
      dispatch(clearAlert())
    }, 5000)
  }
}
