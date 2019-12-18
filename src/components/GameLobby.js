import React from 'react';
import { Button } from 'reactstrap'
import { connect } from 'react-redux'

// import SocketTests from './SocketTests';

const GameLobby = ({
  currentUsers,
  games,
  handleStartGame,
  currentGameSession
} ) => {
  let playerRole
  let currentGame
  if (currentGameSession.currentNumberPlayers >= 4) {
    currentGame = games.filter(game => game.numberPlayer === currentGameSession.currentNumberPlayers)[0]
  }
  console.log(currentGameSession)
  if (currentGameSession.currentPlayerRoles && currentGameSession.localUser) {
    playerRole = currentGameSession.currentPlayerRoles.filter(playerRole => playerRole.userId === currentGameSession.localUser.id)[0]
    console.log(playerRole)
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
  if (currentGameSession.currentUsers) {
    return (
      <>
        <h2>People in Room: {currentGameSession.currentNumberPlayers}{currentGameSession.currentNumberPlayers >= 4 ? <Button onClick={handleStartGame} color='success'>Start Game</Button>: null}</h2>
        <ul>
          {currentGameSession.currentUsers.map(user => <li key={user.id}>{user.username}</li>)}
        </ul>
        {currentGameSession.currentNumberPlayers < 4 ? <h4>need at least 4 players to start.</h4> : null}
        {currentGameSession.currentNumberPlayers >= 4 ? renderCurrentGame() : null}
        {playerRole ? <h4>You are the {playerRole.role}</h4> : null}
      </>
    )
  } else {
    console.log('no users')
    return (
      <h3>no current users detected.</h3>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    currentGameSession: state.session
  }
}

export default connect(mapStateToProps)(GameLobby);
