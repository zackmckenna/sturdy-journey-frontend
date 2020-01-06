import * as actionTypes from '../actionTypes'

export const setErrorMessage = (message) => {
  return {
    type: 'SET_ERROR_ALERT',
    data: message
  }
}

export const setSuccessMessage = (message) => {
  return {
    type: 'SET_SUCCESS_MESSAGE',
    data: message
  }
}

export const clearAlert = () => {
  return {
    type: 'CLEAR_ALERT'
  }
}

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
