import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';

const SocketTests = ({
  testSocket,
  testSocketLogin,
  connectSocket,
  disconnectSocket,
  addCurrentUser}) => {

  return (
    <ButtonGroup>
      <Button color='primary' onClick={testSocket}>Socket.io Test</Button>
      <Button onClick={testSocketLogin}>Socket.io Test Login</Button>
      <Button color='success' onClick={connectSocket}>connect socket</Button>
      <Button color='danger' onClick={disconnectSocket}>disconnect socket</Button>
      <Button color='warning' onClick={addCurrentUser}>add current user</Button>
    </ButtonGroup>
  )
}

export default SocketTests;
