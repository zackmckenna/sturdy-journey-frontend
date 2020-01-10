import * as actionTypes from '../actionTypes'

export const deckInit = (deck) => ({
  type: actionTypes.DECK_INIT,
  data: deck
})

export const initializeDeck = (deck) => {
  return async dispatch => {
    deck.roles.map(card => {
      card.isFlipped = false
      return dispatch({
        type: actionTypes.ADD_CARD,
        data: card
      })
    })
    console.log(deck.roles)
  }
}

export const addRoleCardToDeck = currentPlayerRoles => {
  console.log('adding role card to deck')
  return async (dispatch, getState) => {
    if (getState().deck.hasRoleCard === false) {
      const user = getState().session.localUser
      console.log('current roles:', currentPlayerRoles)
      console.log('user', user.id)
      const role = currentPlayerRoles.filter(role => role.userId === user.id)[0]
      console.log(role)
      const roleCard = {
        id: user.id,
        key: role.role,
        roleName: role.role,
        team: role.role,
        description: `You are the ${role.role}`,
        strategy: `you need to do this action`,
        canStop: null,
        canCall: null,
        type: 'UserRoleCard'
      }
      console.log(role)
      console.log(roleCard)
      return dispatch({
        type: actionTypes.ADD_ROLE_CARD_TO_FRONT,
        data: roleCard
      })
    }
    return
  }
}

export const deckFailed= () => ({
  type: actionTypes.DECK_FAILED
})

export const deckLoading = () => ({
  type: actionTypes.DECK_LOADING
})

export const addCard = (card) => ({
  type: actionTypes.ADD_CARD,
  data: card
})

// export const addCardAtFront = (card) => ({
//   type: actionTypes.ADD_CARD_TO_FRONT,
//   data: card
// })

export const removeCard = (card) => ({
  type: actionTypes.REMOVE_CARD,
  data: card
})
