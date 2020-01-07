import React from 'react'
import { Button, Row, Col, FormGroup, Container } from 'reactstrap'
import { connect } from 'react-redux'
import { LocalForm, Control, Errors } from 'react-redux-form'
import NewAccountButton from './NewAccountButton'
import SeaWitchedLogoColor from './SeaWitchedLogoColor'
import { setLocalUserState } from '../redux/actions/sessionActions'
import { setAlert } from '../redux/actions/notificationActions'
import { loginUser } from '../user/user'
import { withRouter } from 'react-router-dom'
// import { loginUserAction } from '../redux/actions/authenticationActions'

const LoginForm = ({
  history,
  session,
  toggles,
  dispatch }) => {


  const handleSubmit = async (values) => {
    try {
      await loginUser(values.username, values.password)
      const user = await window.localStorage.getItem('loggedAppUser')
      dispatch(setLocalUserState(JSON.parse(user)))
      dispatch(setAlert(`Welcome ${values.username}!`, false))
      history.push('/game_lobby')
    } catch (err) {
      dispatch(setAlert('Wrong username or password', true))
    }
  }

  if(toggles.showLoginForm || toggles.showCreateUserForm || session.localUser) {
    return (
      <>
      </>
    )
  } else {
    return (
      <Container>
        <SeaWitchedLogoColor />
        <Row>
          <Col className='text-light mt-3 text-center'>
            <p>Welcome aboard all ye who dare take part in this dreadful journey. Ye must sign in or create an account to continue.</p>
          </Col>
        </Row>
        <FormGroup>
          <LocalForm onSubmit={values => handleSubmit(values)}>
            <Row className='form-group'>
              <Col className='mt-2' sm={{ size: 'auto' }}>
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
                  messages={{ maxLength: 'Must be 15 characters or less.'
                  }}/>
              </Col>
            </Row>
            <Row>
              <Col sm={{ size: 'auto' }}>
                <Control.text
                  type='password'
                  className='form-control'
                  model='.password'
                  rows='6'
                  id='password'
                  placeholder='password'>
                </Control.text>
              </Col>
            </Row>
            <Row>
              <Col sm={{ size: 'auto' }} className='text-center mt-3 text-align-center'>
                <Button className='btn-block' color='success'>sign in</Button>
              </Col>
            </Row>
          </LocalForm>
        </FormGroup>
        <NewAccountButton />
      </Container>
    )}
}

const mapStateToProps = (state) => {
  return {
    toggles: state.toggles,
    session: state.session
  }
}

// const mapDispatchToProps = dispatch => {
//   return{
//     setAlert: (message) => setAlert(message)
//   }
// }

export default withRouter(connect(mapStateToProps)(LoginForm))
