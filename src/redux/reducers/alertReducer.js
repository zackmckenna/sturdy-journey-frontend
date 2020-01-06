const alertReducer = (state =[], action) => {
  switch (action.type) {
    case 'SET_ERROR_ALERT':
      return {...state, visible: true, success: false, error: true, errorMessage: data}
    case 'SET_SUCCESS_ALERT':
      return {...state, visible: true, success: true, error: false, successMessage: data}
    case 'CLEAR_ALERT':
      return {...state, visible: false, errorMessage: null, successMessage: null}
    default:
      return state
  }
}
