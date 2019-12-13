
import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CreateGameLogic = ({
  createGameName,
  createMinPlayers,
  createMaxPlayers,
  createGameType,
  createNumberPlayers,
  createNumberCaptian,
  createNumberMate,
  createNumberMutineer,
  createNumberFirstmate,
  createNumberGood,
  createNumberEvil,
  handleCreateGameLogic}) => {
    // use the spread syntax to separate the values instead of assigning them all
  return (
    <>
      <Form onSubmit={handleCreateGameLogic}>
        <FormGroup>
          <Label for="gameName">gameName</Label>
          <Input {...createGameName} name="gameName" id="gameName" placeholder="gameName"/>
        </FormGroup>
        <FormGroup>
          <Label for="minPlayers">min players</Label>
          <Input {...createMinPlayers} name="minPlayers" id="minPlayers" placeholder="minPlayers"/>
        </FormGroup>
        <FormGroup>
          <Label for="maxPlayers">max players</Label>
          <Input {...createMaxPlayers} name="maxPlayers" id="maxPlayers" placeholder="maxPlayers" />
        </FormGroup>
        <FormGroup>
          <Label for="gameType">game type</Label>
          <Input {...createGameType} name="gameType" id="gameType" placeholder="gameType" />
        </FormGroup>
        <FormGroup>
          <Label for="numberPlayers">this logic number players</Label>
          <Input {...createNumberPlayers} name="numberPlayers" id="numberPlayers" placeholder="numberPlayers" />
        </FormGroup>
        <FormGroup>
          <Label for="numberCaptian">this logic number players</Label>
          <Input {...createNumberPlayers} name="numberPlayers" id="numberPlayers" placeholder="numberPlayers" />
        </FormGroup>
        <Button>Create Role</Button>
      </Form>
    </>

  );
}

export default CreateGameLogic
