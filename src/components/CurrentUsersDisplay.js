import React from 'react';
import SocketTests from './SocketTests';

const CurrentUserDisplay = ({
  currentUsers,
  testSocket,
  testSocketLogin,
  connectSocket,
  disconnectSocket,
  addCurrentUser } ) => {

  const currentFilteredUsers = currentUsers.filter(user => user != null)

  if (currentFilteredUsers) {
    console.log(currentFilteredUsers)
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
          {currentFilteredUsers.map(user => <li key={user.id}>{user.username}</li>)}
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
