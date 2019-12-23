import React from 'react';
import { Button, Row, Col, FormGroup, Label, Input, Container, Text } from 'reactstrap';
import { connect } from 'react-redux'
import { loginUser } from '../redux/actionCreators'
import { LocalForm, Control, Errors } from 'react-redux-form';
import NewAccountButton from './NewAccountButton'
import style from '../style/login.css'
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
          <Row>
            <Col className='text-light mt-3 text-center'>
              <p>Welcome aboard all ye who dare take part in this dreadful journey. Ye must sign in or create an account to continue.</p>
            </Col>
          </Row>
          <FormGroup>
            <LocalForm onSubmit={values => handleSubmit(values)}>
              <Row className='form-group'>
                <Col className='mt-2' sm={{size: 'auto'}}>
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
              </Row>
              <Row>
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
              <Row>
                <Col sm={{ size: 'auto'}} className='text-center mt-3 text-align-center'>
                  <Button className='btn-block' color='success'>Login</Button>
                </Col>
              </Row>
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
