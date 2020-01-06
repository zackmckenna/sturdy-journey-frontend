import React from 'react'
import { Button } from 'reactstrap'
import NoteForm from './NoteForm'
import { connect } from 'react-redux'
import { deleteNote, toggleNewNoteForm } from '../redux/actionCreators'

const UserNotes = ({
  notes,
  deleteNote,
  handleDeleteNote,
  toggleNoteForm,
  handleNoteSubmit,
  handleNoteChange,
  showNoteForm,
  currentGameSession,
  note,
  toggles
}) => {

  const handleClickDelete = (event) => {
    deleteNote(event)
  }

  const handleAddNoteClick = () => {
    toggleNewNoteForm()
    console.log(toggles)
  }

  const user = currentGameSession.localUser
  if (currentGameSession.localUser) {
    if (toggles.showCreateNoteForm) {
      return (
        <>
        <Button onClick={toggleNoteForm}>Add Note</Button>
          <NoteForm
            handleNoteSubmit={handleNoteSubmit}
            handleNoteChange={handleNoteChange}
            toggleNoteForm={toggleNoteForm}
            note={note}
          />
        <h2>{user.name}s Notes</h2>
        <ul>
          {notes.filter(note => note.user != null ? note.user.id === user.id : null)
            .map(note => note ? <h6 key={note.id}>{note.content}<Button key={note.id} id={note.id} onClick={handleDeleteNote} className='btn-sm'>delete</Button></h6> : null)}
        </ul>
        </>
      )
    }
    return (
      <>
      {<Button onClick={() => handleAddNoteClick()}>Add Note</Button>}
      <h2>{user.name}s Notes</h2>
        <ul>
          {notes.filter(note => note.user != null ? note.user.id === user.id : null)
            .map(note => note ? <h6 key={note.id}>{note.content}<Button key={note.id} id={note.id} onClick={handleClickDelete} className='btn-sm'>delete</Button></h6> : null)}
        </ul>
      </>
    )
  }
  return (
    <>
      <h1>please log in to view notes.</h1>
    </>

  )
}

const mapStateToProps = function(state) {
  return {
    currentGameSession: state.session,
    notes: state.notes,
    toggles: state.toggles
  }
}

const mapDispatchToProps = {
  deleteNote: (event) => deleteNote(event),
  toggleNewNoteForm: () => toggleNewNoteForm()
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNotes)
