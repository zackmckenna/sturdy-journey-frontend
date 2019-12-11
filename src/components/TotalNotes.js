import React from 'react'

const TotalNotes = ({ notes }) => {
  return (
    <>
      <h1>Total Notes in Database</h1>
      {notes.map(note => note.user ? <h5 id={note.id}>{note.content} by {note.user.username}</h5> : null)}
    </>
  )
}

export default TotalNotes;
