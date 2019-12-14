import React from 'react';
import { Button } from 'reactstrap'

// import SocketTests from './SocketTests';

const CurrentUserDisplay = ({
  currentUsers,
  numberPlayers,
  games,
  handleStartGame
} ) => {
  let currentGame;
  console.log(currentUsers)
  console.log(games)
  const currentFilteredUsers = currentUsers.filter(user => user != null)
  if (numberPlayers >= 4) {
    currentGame = games.filter(game => game.numberPlayer === numberPlayers)[0]
    console.log(currentGame)
  }

  const renderCurrentGame = () => {
    return (
      <>
        <h4>{currentGame.gameName}</h4>
        <h6>game type: {currentGame.gameType}</h6>
        <h6>Captains: {currentGame.numberCaptian}</h6>
        <h6>Mates: {currentGame.numberMate}</h6>
        <h6>Mutineers: {currentGame.numberMutineer}</h6>
        <h6>There are {currentGame.numberGood} good cards.</h6>
        <h6>There are {currentGame.numberEvil} evil cards.</h6>
        <h6>There is always only 1 First Mate.</h6>
      </>
    )
  }
  if (currentFilteredUsers) {
    return (
      <>
        <h2>Current Logged in Users: {numberPlayers}{numberPlayers >= 4 ? <Button onClick={handleStartGame} color='success'>Start Game</Button>: null}</h2>
        <ul>
          {currentFilteredUsers.map(user => <li key={user.id}>{user.username}</li>)}
        </ul>
        {numberPlayers < 4 ? <h4>need at least 4 players to start.</h4> : null}
        {numberPlayers >= 4 ? renderCurrentGame() : null}
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
