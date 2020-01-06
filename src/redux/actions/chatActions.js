import * as actionTypes from '../actionTypes'

export const sendChatMessage = (message, user) => ({
  type: actionTypes.SEND_CHAT_MESSAGE,
  data: { message: message,
    user: user }
})
