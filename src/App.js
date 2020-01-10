import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import style from './style/app.css'
import  { toggleCreateUserForm } from './redux/actionCreators'
import  {
  clearCurrentPlayerRoles,
  setCurrentUsers,
  setCurrentNumberPlayers,
  setCurrentPlayerRoles } from  './redux/actions/sessionActions'
import  { initializeRoles } from './redux/actions/roleActions'
import { initializeNotes } from './redux/actions/noteActions'
import { initializeGames } from './redux/actions/gameActions'
import { initializeUsers } from './redux/actions/userActions'
import  { setErrorMessage,
  setSuccessMessage,
  clearNotification,
  setAlert  } from './redux/actions/notificationActions'
import { initializeDeck, addRoleCardToDeck } from './redux/actions/deckActions'
import  { startGame, endGame } from './redux/actions/sessionActions'
import LoginForm from './components/LoginForm'
import SkelNavbar from './components/SkelNavbar'
import Home from './components/Home'
import NewUser from './components/NewUser'
import GameLobby from './components/GameLobby'
import RoleCard from './components/UserGameView'
import HowToPlay from './components/HowToPlay'
import AppAlert from './components/AppAlert'
import Socket from './components/Socket'

import { TEMPGAMES } from './shared/tempGames'

import { Container } from 'reactstrap'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import './style/alerts.css'
import socket from './socket/socket'

import airtableService from './services/airtable'

const App = (props) => {
  // const store = props.store

  useEffect(() => {
    props.initializeNotes()
    props.initializeGames()
    props.initializeRoles()
    props.initializeUsers()
    props.initializeDeck(TEMPGAMES[1])
    console.log(props.deck)
    console.log(airtableService.getAll())
  }, [])

  // useEffect(() => {
  //   async function setLocalUser() {
  //     console.log(`set user in redux:`)
  //     props.user ? console.log(props.user) : console.log('no current user')
  //   }
  //   setLocalUser()
  // }, [])

  // socket.io connections
  useEffect(() => {
    console.log('opening visitors socket . . .')
    socket.on('visitors', async users => {
      console.log('socket.io visitors command received')
      const filteredUsers = await users.filter(user => user != null)
      await props.setCurrentUsers(filteredUsers)
      await props.setCurrentNumberPlayers(filteredUsers.length)
      console.log(props.session)

      console.log('opening distribute roles socket . . .')
      socket.on('distribute roles', async roles => {
        await props.setCurrentPlayerRoles(roles)
        console.log('distribute roles received')
        props.addRoleCardToDeck(roles)
      })

      socket.on('redirect', async route => {
        console.log(route)
        console.log('redirect')
      })

      socket.on('clear user roles', () => {
        console.log('clearing roles')
        props.clearCurrentPlayerRoles()
      })

      socket.on('chat message', async message => {
        console.log(message)
        props.addChatMessage(message, window.localStorage.loggedAppUser)
      })
    })
  }, [])

  const handleStartGame = async () => {
    const distributedRoles = await distributeRoles()
    socket.emit('start game', distributedRoles)
    props.startGame()
  }

  const addRole = (name, numberOfRoles, array = []) => {
    if (numberOfRoles > 1) {
      array = array.concat(name)
      return addRole(name, numberOfRoles - 1, array)
    } else if (numberOfRoles === 1) {
      array = array.concat(name)
      return array
    }
  }

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5)
  }

  const distributeRoles = () => {
    if (props.currentNumberPlayers >= 4) {
      // const inRoomUsers = Object.values(store.getState().session.currentUsers)
      const currentGameThing = props.games.filter(game => game.numberPlayer === props.currentNumberPlayers)[0]
      console.log(currentGameThing)
      let rolesArray = []
      let alignmentArray = []
      let captainArray = []
      // rolesArray = rolesArray.concat(addRole('captian', currentGameThing.numberCaptian))
      captainArray = captainArray.concat(addRole('captain', currentGameThing.numberCaptian))
      rolesArray = rolesArray.concat(addRole('first-mate', currentGameThing.numberMate))
      rolesArray = rolesArray.concat(addRole('mutineer', currentGameThing.numberMutineer))
      rolesArray = rolesArray.concat(addRole('lookout', 1))

      alignmentArray = alignmentArray.concat(addRole('good', currentGameThing.numberGood))
      alignmentArray = alignmentArray.concat(addRole('evil', currentGameThing.numberEvil))
      console.log(alignmentArray)
      alignmentArray = shuffle(alignmentArray)
      captainArray = captainArray.map((captain, index) => {
        return alignmentArray[index] === 'good' ? 'captain' : 'seawitch'
      })
      console.log(captainArray)
      rolesArray = rolesArray.concat(captainArray)
      rolesArray = shuffle(rolesArray)
      const assignedUsersArray = props.currentUsers.map((user, index) => {
        user = {
          ...user,
          role: rolesArray[index]
        }
        return user
      })
      return assignedUsersArray
    }
  }

  return (
    <>
        <Router>
          <SkelNavbar />
          <Socket />
          <Container style={style.container}>
            {props.user ? null : <LoginForm />}
            <NewUser />
            <div className='alerts'>
              <AppAlert />
            </div>
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/how_to_play' component={HowToPlay}/>
              <Route path='/game_lobby' render={() =>
                <GameLobby
                  handleStartGame={handleStartGame}
                />
              }/>
              <Route path='/role_card' component={RoleCard}/>
            </Switch>
          </Container>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Router>
    </>
  )
}

const mapStateToProps = (state) => {
  return{
    user: state.session.localUser,
    currentUsers: state.session.currentUsers,
    currentNumberPlayers: state.session.currentNumberPlayers,
    games: state.games.games,
    loginForm: state.loginForm,
    toggles: state.toggles,
    state: state,
    deck: state.deck
  }
}

export default withRouter(connect((mapStateToProps),
  {
    initializeNotes,
    initializeGames,
    initializeUsers,
    initializeRoles,
    setCurrentUsers,
    clearCurrentPlayerRoles,
    setCurrentNumberPlayers,
    setCurrentPlayerRoles,
    toggleCreateUserForm,
    setSuccessMessage,
    setErrorMessage,
    setAlert,
    clearNotification,
    startGame,
    endGame,
    initializeDeck,
    addRoleCardToDeck
  }
)(App))

