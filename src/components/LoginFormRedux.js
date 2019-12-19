import React from 'react';
import { Button, Label, FormGroup} from 'reactstrap';
import { Control, Form } from 'react-redux-form'


const LoginForm = ({
  handleUsernameChange,
  handlePasswordChange,
  // handleLogin
  }) => {

  const handleLogin= (user) =>{
    console.log(user)
  }

  return (

    <Form model='user' inline onSubmit={(user) => handleLogin(user)}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleUsername" className="mr-sm-2">Username</Label>
        <Control.text model='user.username' id='user.username' />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="password" className="mr-sm-2">Password</Label>
        <Control.text model='user.password' id='user.password'/>
      </FormGroup>
      <Button type='submit' color='success'>Login</Button>
    </Form>
  );
}

export default LoginForm;
