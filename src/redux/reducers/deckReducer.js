import * as actionTypes from '../actionTypes'

const deckReducer = (state = {
  isLoading: true,
  errMess: null,
  hasRoleCard: false,
  cards: []
  }, action) => {
  switch (action.type) {
  case actionTypes.DECK_FAILED:
    return { ...state, isLoading: false, errMess: action.data }
  case actionTypes.DECK_LOADING:
    return { ...state, isLoading: true, errMess: null, cards: [] }
  case actionTypes.DECK_INIT:
    return { ...state, isLoading: false, cards: action.data }
  case actionTypes.DECK_CLEAR:
    return { ...state, hasRoleCard: false, isLoading: false, cards: [] }
  case actionTypes.ADD_CARD:
    return { ...state, cards: [...state.cards, action.data] }
  case actionTypes.ADD_ROLE_CARD_TO_FRONT:
    return { ...state, hasRoleCard: true, cards: [action.data, ...state.cards] }
  case actionTypes.REMOVE_CARD:
    return { ...state, cards: state.cards.filter(card => card.id !== action.data) }
  case actionTypes.FLIP_CARD:
    return state.cards.map(card => {
      if (card.id !== action.data) {
        return card
      }
      return {
        ...card,
        isFlipped: ! card.isFlipped
      }
    })
  default:
    return state
  }
}


export default deckReducer
