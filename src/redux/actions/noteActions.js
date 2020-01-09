import notesService from '../../services/notes'
import * as actionTypes from '../actionTypes'

export const deleteNote = (event) => {
  event.preventDefault()
  return async dispatch => {
    if(window.confirm('are you sure you want to delete note?')) {
      console.log(event.target.id)
    }
    await notesService.deleteNote(event.target.id)
    // createNotification(`note deleted`, setSuccessMessage, 5000)
    dispatch(initializeNotes())
  }
}

export const initializeNotes = () => {
  return async dispatch => {
    function onSuccess(success) {
      dispatch({
        type: actionTypes.NOTES_INIT,
        data: success })
    }
    function onError(error) {
      dispatch({
        type: actionTypes.NOTES_FAILED,
      })
    }
    try {
      dispatch({
        type: actionTypes.NOTES_LOADING
      })
      const success = await notesService.getAll()
      return onSuccess(success)
    } catch (error) {
      return onError(error)
    }
  }
}


export const submitNote = (note, user) => {
  return async dispatch => {
    console.log(note, user)
    try{
      const newNoteObject = {
        content: note,
        user: user
      }
      await notesService.create(newNoteObject)
      // createNotification('Note has been added', setSuccessMessage, 5000)
      dispatch(initializeNotes())
    } catch(exception) {
      console.log(exception)
    }
  }
}
