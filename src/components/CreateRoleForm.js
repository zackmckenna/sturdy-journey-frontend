import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CreateRoleForm = ({
  handleUsernameChange,
  handlePasswordChange,
  handleNameChange,
  handleCreateRole}) => {
  return (
    <Form onSubmit={handleCreateRole}>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input onChange={handleUsernameChange} type="text" name="username" id="username" placeholder="username"/>
      </FormGroup>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input onChange={handleNameChange} type="text" name="name" id="name" placeholder="name"/>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input onChange={handlePasswordChange} type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      <Button>Create Account</Button>
    </Form>
  );
}

export default CreateRoleForm;
