import React from 'react'
import { Button, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import Alert from './AppAlert'
import UsersInRoom from './UsersInRoom'
import { withRouter } from 'react-router-dom'

// import SocketTests from './SocketTests';

const GameLobby = ({
  games,
  handleStartGame,
  currentGameSession,
  history
} ) => {
  console.log(currentGameSession.currentNumberPlayers)
  let playerRole
  let currentGame
  if (currentGameSession.currentNumberPlayers >= 4) {
    currentGame = games.filter(game => game.numberPlayer === currentGameSession.currentNumberPlayers)[0]
  }
  if (currentGameSession.currentPlayerRoles && currentGameSession.localUser) {
    playerRole = currentGameSession.currentPlayerRoles.filter(playerRole => playerRole.userId === currentGameSession.localUser.id)[0]
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
  // if (playerRole) {
  //   history.push('/role_card')
  // }
  if (currentGameSession.currentUsers) {
    return (
      <>
    <Row>
      <Col className='text-light text-center'>
        <h2>{currentGameSession.currentNumberPlayers >= 4 ? <Button onClick={handleStartGame} color='success'>Start Game</Button>: null}</h2>
        <UsersInRoom />
        {/* <h2>People in Room: {currentGameSession.currentNumberPlayers} */}
        {/* <ul>
          {currentGameSession.currentUsers.map(user => <li key={user.id}>{user.username}</li>)}
        </ul> */}
        {currentGameSession.currentNumberPlayers < 4 ? <h4>need at least 4 players to start.</h4> : null}
        {currentGameSession.currentNumberPlayers >= 4 ? renderCurrentGame() : null}
      </Col>
    </Row>
      </>
    )
  } else {
    return (
      <Row>
        <Col className='mt-3'>
          <Alert alertType={'danger'} alertText={'no current users detected'}/>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    currentGameSession: state.session,
    games: state.games.games
  }
}

export default withRouter(connect(mapStateToProps)(GameLobby))
