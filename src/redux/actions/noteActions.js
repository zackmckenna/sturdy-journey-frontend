import * as actionTypes from '../actionTypes'
import notesService from '../../services/notes'
import { initializeNotes } from './initialActions'

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
