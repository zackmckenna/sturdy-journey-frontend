const gameReducer = (state =[], action) => {
  switch (action.type) {
  case 'NEW_GAME':
    return state.concat(action.data)
  case 'INIT_GAMES':
    return state.concat(action.data)
  default:
    return state
  }
}

// export const initializeGames = () => {
//   return async dispatch => {
//     const games = await gamesService.getAll()
//     dispatch({
//       type: 'INIT_GAMES',
//       data: games,
//     })
//   }
// }

export default gameReducer
