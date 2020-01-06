import React from 'react'
import { Button, Form, FormGroup, Row, Container, Col } from 'reactstrap'
import { toggleCreateUserForm } from '../redux/actionCreators'
import { LocalForm, Control, Errors } from 'react-redux-form'
import { connect, useSelector } from 'react-redux'
import { createAccount } from '../user/user'

const NewUser = ({
  // session,
  // toggles,
  toggleCreateUserForm }) => {

  const toggles = useSelector(state => state.toggles)
  const session = useSelector(state => state.session)

  const handleSubmit = (values) => {
    createAccount(values.username, values.name, values.password)
    console.log('create account clicked')
    toggleCreateUserForm(false)
  }

  const handleCancelUserForm = () => {
    toggleCreateUserForm(false)
  }

  if (session.localUser || !toggles.showCreateUserForm) {
    return (
      <>
      </>
    )
  }

  return (
    <Container>
      <Row>
        <Col className='mt-2 text-center text-light'>
          <p>Create the username and password that ye most desire. Beware of scurvy dogs.</p>
        </Col>
      </Row>
      <Row>
        <Col >
          <Form >
            <FormGroup className='form-group'>
              <LocalForm onSubmit={values => handleSubmit(values)}>
                <Row >
                  <Col className='mt-2'>
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
                      model='.username'
                      show='touched'
                      component='div'
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className='mt-2'>
                    <Control.text
                      className='form-control'
                      model='.name'
                      rows='6'
                      id='name'
                      placeholder='name'>
                    </Control.text>
                  </Col>
                </Row>
                <Row>
                  <Col className='mt-2'>
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
                  <Col className='text-center mt-2'>
                    <Button className='mr-2' color='success'>submit</Button>
                    <Button onClick={() => handleCancelUserForm()} color='secondary'>cancel</Button>
                  </Col>
                </Row>
              </LocalForm>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
// const mapStateToProps = (state) => {
//   return {
//     toggles: state.toggles,
//     session: state.session
//   }
// }
const mapDispatchToProps = {
  // createAccount: (username, name, password) => createAccount(username, name, password),
  toggleCreateUserForm: (data) => toggleCreateUserForm(data)
}

export default connect(null, mapDispatchToProps)(NewUser)


