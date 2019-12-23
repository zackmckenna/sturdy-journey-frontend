const notificationReducer = (state =[], action) => {
  switch (action.type) {
    case 'SUCCESS_NOTIFICATION':
      return action.data
    case 'DANGER_NOTIFICATION':
      return state.concat(action.data)
    default:
      return state
  }
}

export const createSuccessNotification = (message) => {
  return ({
    type: 'SUCCESS_NOTIFICATION',
    data: message
  })
}

export const createDangerNotification= (message) => {
  return ({
    type: 'DANGER_NOTIFICATION',
    data: message
  })
}

export const clearNotification = () => {
  return ({
    type: 'CLEAR_NOTIFICATION',
    data: ''
  })
}

export default notificationReducer
