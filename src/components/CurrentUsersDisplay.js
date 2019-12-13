import React from 'react';
// import SocketTests from './SocketTests';

const CurrentUserDisplay = ({
  currentUsers,
  numberPlayers,
  // testSocket,
  // testSocketLogin,
  // connectSocket,
  // disconnectSocket,
  // addCurrentUser
} ) => {

  const currentFilteredUsers = currentUsers.filter(user => user != null)

  if (currentFilteredUsers) {
    return (
      <>
        <h2>Current Logged in Users: {numberPlayers}</h2>
        {/* <SocketTests
              testSocket={testSocket}
              testSocketLogin={testSocketLogin}
              connectSocket={connectSocket}
              disconnectSocket={disconnectSocket}
              addCurrentUser={addCurrentUser}
            /> */}
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
