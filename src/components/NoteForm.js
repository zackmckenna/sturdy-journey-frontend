import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const NoteForm = ({ handleNoteSubmit, handleNoteChange, toggleNoteForm, note }) => {
  return (
    <Form onSubmit={handleNoteSubmit}>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input onChange={handleNoteChange} value={note} type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Button color='success'>Add note</Button>
      {' '}
      <Button color='warning' onClick={toggleNoteForm}>Cancel</Button>
    </Form>
  );
}

export default NoteForm;
