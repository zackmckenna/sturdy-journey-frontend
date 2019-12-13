import React from 'react';

// import SocketTests from './SocketTests';

const CurrentUserDisplay = ({
  currentUsers,
  numberPlayers,
  games
} ) => {
  console.log(currentUsers)
  console.log(games)
  const currentFilteredUsers = currentUsers.filter(user => user != null)
  if (numberPlayers >= 4) {
    const currentGame = games.filter(game => game.numberPlayer === numberPlayers)
    console.log(currentGame)
  }

  const renderCurrentGame = () => {
    if (currentGame) {
      return (
        <>
          <h2>{currentGame.gameName}</h2>
          <h5>Game type: {currentGame.gameType}</h5>
          <h5
        </>
      )
    }
  }

  if (currentFilteredUsers) {
    return (
      <>
        <h2>Current Logged in Users: {numberPlayers}</h2>
        <ul>
          {currentFilteredUsers.map(user => <li key={user.id}>{user.username}</li>)}
        </ul>
        {numberPlayers < 4 ? <h4>need at least 4 players to start.</h4> : null}

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
