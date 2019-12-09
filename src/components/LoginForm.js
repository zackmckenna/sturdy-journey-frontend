import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LoginForm = (
  {handleUsernameChange,
  handlePasswordChange,
  handleLogin}) => {
  return (
    <Form inline onSubmit={handleLogin}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleUsername" className="mr-sm-2">Username</Label>
        <Input onChange={handleUsernameChange} type="username" name="username" id="exampleUsername" placeholder="username" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="password" className="mr-sm-2">Password</Label>
        <Input onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="password"/>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default LoginForm;
