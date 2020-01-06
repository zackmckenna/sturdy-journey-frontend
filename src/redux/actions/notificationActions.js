import * as actionTypes from '../actionTypes'

export const setErrorMessage = (message) => ({
  type: actionTypes.SET_ERROR_MESSAGE,
  data: message
})

export const setSuccessMessage = (message) => ({
  type: actionTypes.SET_SUCCESS_MESSAGE,
  data: message
})

export const clearNotification = () => ({
  type: actionTypes.CLEAR_NOTIFICATION
})

export const setAlert = (message, error) => (dispatch) => {
  console.log(message)
  console.log('setting alert')
  if (error === true) {
    dispatch(setErrorMessage(message))
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
  } else {
    dispatch(setSuccessMessage(message))
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
  }
}
