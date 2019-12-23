import React from 'react';
import { Button, Row, Col, FormGroup, Label, Input, Container } from 'reactstrap';
import { connect } from 'react-redux'
import { loginUser } from '../redux/actionCreators'
import { LocalForm, Control, Errors } from 'react-redux-form';
import NewAccountButton from './NewAccountButton'

const LoginForm = ({
  session,
  loginUser,
  toggles}) => {

  const handleSubmit = (values) => {
      loginUser(values.username, values.password)
    }

  if(toggles.showLoginForm || toggles.showCreateUserForm || session.localUser) {
    return (
      <>
      </>
    )
  } else {
  return (
    <Container>
          <FormGroup>
            <LocalForm onSubmit={values => handleSubmit(values)}>
              <Row className='form-group'>
                <Col sm={{ size: 'auto', offset: 1}}>
                  <Control.text
                      className='form-control'
                      model='.username'
                      name='username'
                      id='username'
                      placeholder='username'
                      >
                  </Control.text>
                  <Errors
                      className='text-danger'
                      model='.author'
                      show='touched'
                      component='div'
                      messages={{maxLength: 'Must be 15 characters or less.'
                    }}/>
                </Col>
                <Col sm={{ size: 'auto'}}>
                  <Control.text
                      className='form-control'
                      model='.password'
                      rows='6'
                      id='password'
                      placeholder='password'>
                  </Control.text>
                </Col>
              </Row>
              <Button sm='4' xs='6' color='success'>Login</Button>
            </LocalForm>
          </FormGroup>
          <NewAccountButton />
    </Container>

  )}
}

    // <Form inline onSubmit={handleLogin}>
    //   <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
    //     <Label for="exampleUsername" className="mr-sm-2">Username</Label>
    //     <Input onChange={handleUsernameChange} type="username" name="username" id="exampleUsername" placeholder="username" />
    //   </FormGroup>
    //   <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
    //     <Label for="password" className="mr-sm-2">Password</Label>
    //     <Input onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="password"/>
    //   </FormGroup>
    //   <Button color='success'>Login</Button>
    // </Form>
const mapStateToProps = (state) => {
  return {
    toggles: state.toggles,
    session: state.session
  }
}

const mapDispatchToProps = {
  loginUser: (username, password) => loginUser(username, password)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
