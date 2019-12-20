import React from 'react';
import { Button, Form, FormGroup, Label, Row } from 'reactstrap';
import { createAccount } from '../redux/actionCreators'
import { LocalForm, Control, Errors } from 'react-redux-form';
import { connect } from 'react-redux'

const NewUser = ({
  createAccount
  }) => {

  const handleSubmit = (values) => {
    createAccount(values.username, values.name, values.password)
  }

  return (
    <Form >
      <FormGroup>
        <LocalForm onSubmit={values => handleSubmit(values)}>
            <Row className='form-group'>
                <Label htmlFor='username'>Username</Label>
                <Control.text
                    className='form-control'
                    model='.username'
                    name='username'
                    id='username'
                    >
                </Control.text>
                <Errors
                    className='text-danger'
                    model='.username'
                    show='touched'
                    component='div'
                    />
                <Label htmlFor='name'>Name</Label>
                <Control.text
                    className='form-control'
                    model='.name'
                    rows='6'
                    id='name'>
                </Control.text>
                <Label htmlFor='password'>Password</Label>
                <Control.text
                    className='form-control'
                    model='.password'
                    rows='6'
                    id='password'>
                </Control.text>
            </Row>
            <Button color='success'>Submit</Button>
          </LocalForm>
      </FormGroup>
    </Form>
  );
}

const mapDispatchToProps = {
  createAccount: (username, name, password) => createAccount(username, name, password)
}

export default connect(null, mapDispatchToProps)(NewUser)


