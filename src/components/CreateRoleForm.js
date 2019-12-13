import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CreateRoleForm = ({
  roles,
  handleDeleteRole,
  handleCreateRole,
  handleRoleAlignmentChange,
  handleRoleDescriptionChange,
  handleRoleActionsChange,
  roleActions,
  roleName,
  roleDescription,
  roleAlignment }) => {
    // use the spread syntax to separate the values instead of assigning them all
  return (
    <>
      <Form onSubmit={handleCreateRole}>
        <FormGroup>
          <Label for="roleName">role name</Label>
          <Input {...roleName} name="roleName" id="roleName" placeholder="roleName"/>
        </FormGroup>
        <FormGroup>
          <Label for="roleAlignment">alignment</Label>
          <Input value={roleAlignment} onChange={handleRoleAlignmentChange} type="text" name="roleAlignment" id="roleAlignment" placeholder="roleAlignment"/>
        </FormGroup>
        <FormGroup>
          <Label for="roleDescription">role description</Label>
          <Input value={roleDescription} onChange={handleRoleDescriptionChange} type="roleDescription" name="roleDescription" id="roleDescription" placeholder="roleDescription" />
        </FormGroup>
        <FormGroup>
          <Label for="roleActions">role actions</Label>
          <Input value={roleActions} onChange={handleRoleActionsChange} type="roleActions" name="roleActions" id="roleActions" placeholder="roleActions" />
        </FormGroup>
        <Button>Create Role</Button>
      </Form>
      {roles.map(role => <p key={role.id}>{role.name}<Button id={role.id} onClick={handleDeleteRole}>delete</Button></p>)}
    </>

  );
}

export default CreateRoleForm
