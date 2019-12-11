import React from 'react';
import SocketTests from './SocketTests';

const CurrentUserDisplay = ({
  currentUsers,
  testSocket,
  testSocketLogin,
  connectSocket,
  disconnectSocket,
  addCurrentUser } ) => {
  if (currentUsers) {
    console.log(currentUsers)
    return (
      <>
        <h2>Current Logged in Users</h2>
        <SocketTests
              testSocket={testSocket}
              testSocketLogin={testSocketLogin}
              connectSocket={connectSocket}
              disconnectSocket={disconnectSocket}
              addCurrentUser={addCurrentUser}
            />
        <ul>
          {currentUsers.map(user => <li>{user}</li>)}
        </ul>
      </>
    )
  } else {
    console.log('no users')
    return (
      <h3>no current users detected.</h3>
    )
  }
}

export default CurrentUserDisplay;
