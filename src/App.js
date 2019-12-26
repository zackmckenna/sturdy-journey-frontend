import React, { useState, useEffect } from 'react';
import { useField } from './hooks'
import { connect } from 'react-redux'
import style from './style/app.css'

//redux reducers
import { setUser,
          removeUserFromSession,
          setCurrentUsers,
          setCurrentNumberPlayers,
          setCurrentPlayerRoles,
          initializeRoles,
          initializeNotes,
          initializeGames,
          initializeUsers,
          toggleCreateUserForm,
          toggleLoginForm } from './redux/actionCreators'
// component imports
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import SkelNavbar from './components/SkelNavbar';
import UserNotes from './components/UserNotes'
import Home from './components/Home'
import NewUser from './components/NewUser'
import GameLobby from './components/GameLobby'
import RoleCard from './components/RoleCard'
import SeawitchedLogoColor from './components/SeaWitchedLogoColor'

import { Container } from 'reactstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import socket from './socket/socket'

const App = (props) => {
  const store = props.store

  const [note, setNote] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);


  useEffect(() => {
    async function getNotes() {
      await props.initializeNotes()
      console.log(`set notes in redux from notes api:`)
      console.log(store.getState().notes)
    }
    getNotes()
  }, [])

  useEffect(() => {
    async function getUsers() {
      await props.initializeUsers()
      console.log(`set total users in redux from users api:`)
      console.log(store.getState().users)
    }
    getUsers()
  }, [])

  useEffect(() => {
    async function getGames() {
      await props.initializeGames()
      console.log(`set all games in redux from games api:`)
      console.log(store.getState().games)
    }
    getGames()
  }, [])

  useEffect(() => {
    async function getRoles() {
      await props.initializeRoles()
      console.log(`redux roles init:`)
      console.log(store.getState().roles)
    }
    getRoles()
  }, [])

  useEffect(() => {
    async function setLocalUser() {
      await props.setUser()
      console.log(`set user in redux:`)
      props.user ? console.log(props.user) : console.log('no current user')
    }
    setLocalUser()
  }, [])

  // socket.io connections
  useEffect(() => {

      console.log('opening visitors socket . . .')
      socket.on('visitors', async users => {
        console.log('socket.io visitors command received')
        const filteredUsers = await users.filter(user => user != null)
        await props.setCurrentUsers(filteredUsers);
        await props.setCurrentNumberPlayers(filteredUsers.length)
        console.log(store.getState().session)

      console.log('opening distribute roles socket . . .')
      socket.on('distribute roles', async roles => {
        await props.setCurrentPlayerRoles(roles)
        console.log(store.getState().session)
      })

      socket.on('chat message', async message => {
        console.log(message)
        props.addChatMessage(message, window.localStorage.loggedAppUser)
      })

    })
  }, []);

  // const toggleNoteForm = () => {
  //   setShowNoteForm(!showNoteForm)
  // }
  // event handlers
  // const handleNoteChange = (event) => {
  //   setNote(event.target.value)
  // }

  const handleStartGame = async () => {
    const distributedRoles = distributeRoles();
    socket.emit('start game', distributedRoles)
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
    return array.sort(() => Math.random() - 0.5);
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
      rolesArray = rolesArray.concat(addRole('mate', currentGameThing.numberMate))
      rolesArray = rolesArray.concat(addRole('mutineer', currentGameThing.numberMutineer))
      rolesArray = rolesArray.concat(addRole('firstmate', 1))

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
          <Container style={style.container}>
          <Notification
            notificationColor={'danger'}
            notificationText={errorMessage}/>

          <Notification
            notificationColor={'success'}
            notificationText={successMessage}/>
          <LoginForm />

          <NewUser />

          <Switch>

            <Route path='/home' component={Home} />
            <Route path='/user_notes' render={() =>
              <UserNotes />}/>
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
    games: state.games,
    loginForm: state.loginForm,
    toggles: state.toggles
  }
}

export default connect((mapStateToProps),
  {
  initializeNotes,
  initializeGames,
  initializeUsers,
  initializeRoles,
  setUser,
  setCurrentUsers,
  setCurrentNumberPlayers,
  setCurrentPlayerRoles,
  removeUserFromSession,
  toggleCreateUserForm
  }
)(App)

