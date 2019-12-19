const loginFormReducer = (state =[], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return state.concat(action.data)
    case 'INIT_NOTES':
      return state.concat(action.data)
    default:
      return state
  }
}

export const initializeNotes = () => {
  return async dispatch => {
    const notes = await notesService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: notes,
    })
  }
}
