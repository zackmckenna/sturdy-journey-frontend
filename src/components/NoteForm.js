import React from 'react'
import { Button, Container, FormGroup, Label, Row } from 'reactstrap'
import { connect } from 'react-redux'
import { submitNote } from '../redux/actionCreators'
import { LocalForm, Control } from 'react-redux-form'

const NoteForm = ({ user, submitNote }) => {

  const handleSubmit = (values) => {
    console.log('handle Submit started')
    console.log(values.note, user)
    submitNote(values.note, user)
  }

  return (
    <Container>
      <FormGroup>
        <LocalForm onSubmit={values => handleSubmit(values)}>
          <Row className='form-group'>
            <Label htmlFor='note'>Note</Label>
            <Control.textarea
              className='form-control'
              model='.note'
              name='note'
              id='note'
            >
            </Control.textarea>
          </Row>
          <Button color='success'>Add Note</Button>
        </LocalForm>
      </FormGroup>
    </Container>
  )
}

const mapDispatchToProps = {
  submitNote: (note, user) => submitNote(note, user)
}

const mapStateToProps = (state) => {
  return {
    user: state.session.localUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
