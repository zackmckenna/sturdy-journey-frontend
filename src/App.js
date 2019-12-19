import React, { useState, useEffect } from 'react';
import { useField } from './hooks'
import { connect } from 'react-redux'

//redux reducers
import { initializeUsers } from './redux/reducers/usersReducer'
import { initializeGames } from './redux/reducers/gameReducer'
import { initializeRoles } from './redux/reducers/roleReducer'
import { initializeNotes } from './redux/reducers/noteReducer'
import {  setUser,
          setCurrentUsers,
          setCurrentNumberPlayers,
          setCurrentPlayerRoles,
          removeUser,
          addChatMessage } from './redux/reducers/sessionReducer'
// api services
import usersService from './services/users';
import notesService from './services/notes';
import accountService from './services/account';
import loginService from './services/login';
import rolesService from './services/roles'
import gamesService from './services/bitGame';
import socketIoClient from 'socket.io-client'

// component imports
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import SkelNavbar from './components/SkelNavbar';
import UserNotes from './components/UserNotes'
import Home from './components/Home'
import SocketTests from './components/SocketTests'
import NewUser from './components/NewUser'
import GameLobby from './components/GameLobby'
import RoleCard from './components/RoleCard'
import Chatroom from './components/Chatroom'
import LoginFormRedux from './components/LoginFormRedux'
// import Footer from './components/PageFooter'
import CurrentUserDisplay from './components/CurrentUsersDisplay'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateRoleForm from './components/CreateRoleForm';

// initialize socket.io socket
const socket = socketIoClient('http://localhost:30725/')

const App = (props) => {
  const store = props.store
  /*
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [games, setGames] = useState([]);
  */
  const [user, setUser] = useState(null)
  const [userRole, setUserRole] = useState('')
  const [allUsers, setAllUsers] = useState([])
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [numberPlayers, setNumberPlayers] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [newUserButton, setNewUserButton] = useState(false);
  const [showNoteForm, setShowNoteForm] = useState(false)
  const [currentUsers, setCurrentUsers] = useState([]);
  const [roles, setRoles] = useState([])
  const [games, setGames] = useState([])
  const [message, setMessage] = useState('')

  //to do: finish moving all of these to custom hooks
  const roleName = useField('text')
  const [roleAlignment, setRoleAlignment] = useState('')
  const [roleDescription, setRoleDescription] = useState('')
  const [roleActions, setRoleActions] = useState('')
  const [roleBoolean, setRoleBoolean] = useState(null)

  // OLD, MOVED TO REDUX, MUST CHANGE DEPENDANT
  // COMPONENTS TO USE REDUX STATE

  useEffect(() => {
    notesService
      .getAll().then(initialNotes => {
        setNotes(initialNotes)
      });
  }, [])

  useEffect(() => {
    rolesService
      .getAll().then(initialRoles => {
        setRoles(initialRoles)
      });
  }, [])

  useEffect(() => {
    gamesService
      .getAll().then(initialGames => {
        setGames(initialGames)
      });
  }, [])

  useEffect(() => {
    usersService
      .getAll().then(initialUsers => {
        setAllUsers(initialUsers)
      });
  }, [])

  useEffect(() => {
    console.log('set user run')
    const loggedAppUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedAppUserJSON) {
      const user = JSON.parse(loggedAppUserJSON)
      setUser(user)
      notesService.setToken(user.token)
    }
  }, [])

  useEffect(() => {
    console.log('use effect ran, component mounted')
    socket.on('visitors', async users => {
      console.log(users)
      const filteredUsers = await users.filter(user => user !== null)
      setCurrentUsers(filteredUsers);
      setNumberPlayers(filteredUsers.length)
    })
  }, []);

  useEffect(() => {
    console.log('use effect ran, component mounted')
    socket.on('visitors', async users => {
      const filteredUsers = await users.filter(user => user !== null)
      await props.setCurrentUsers(filteredUsers);

      await setCurrentUsers(filteredUsers);
      setNumberPlayers(filteredUsers.length)
    })
  }, []);

  // REDUX get games, users, notes and roles
  // and store in REDUX STORE

  useEffect(() => {
    async function getNotes() {
      await props.initializeNotes(notes)
      console.log(`redux notes init`)
      console.log(store.getState().notes)
    }
    getNotes()
  }, [])

  useEffect(() => {
    async function getUsers() {
      await props.initializeUsers()
      console.log(`redux users init`)
      console.log(store.getState().users)
    }
    getUsers()
  }, [])

  useEffect(() => {
    async function getGames() {
      await props.initializeGames()
      console.log(`redux games init`)
      console.log(store.getState().games)
    }
    getGames()
  }, [])

  useEffect(() => {
    async function getRoles() {
      await props.initializeRoles()
      console.log(`redux roles init`)
      console.log(store.getState().roles)
    }
    getRoles()
  }, [])

  useEffect(() => {
    async function setLocalUser() {
      await props.setUser()
      console.log(`set user redux`)
      console.log(store.getState().session)
    }
    setLocalUser()
  }, [])

  useEffect(() => {
    console.log('running visitors socket')
    socket.on('visitors', async users => {

      const filteredUsers = await users.filter(user => user != null)
      console.log('filter use', filteredUsers)
      await props.setCurrentUsers(filteredUsers);
      await props.setCurrentNumberPlayers(filteredUsers.length)
      console.log(store.getState().session)
      // setNumberPlayers(filteredUsers.length)
    })
  }, []);

  useEffect(() => {
    console.log('distributing roles to redux')
    socket.on('distribute roles', async roles => {
      await props.setCurrentPlayerRoles(roles)
      console.log(store.getState().session)
    })
  }, [])

  useEffect(() => {
    socket.on('chat message', async message => {
      console.log(message)
      props.addChatMessage(message, window.localStorage.loggedAppUser)
    })
  }, [])

  const handleLogout = async () => {
    await socket.emit('remove_user', {username:user.username, name: user.name, id: user.id})
    window.localStorage.removeItem('loggedAppUser')
    await props.removeUser();
    setUser(null)
  }



  // handle socket.io connections

  // useEffect(() => {
  //   console.log('roles distributed')
  //   socket.on('distribute roles', async roles => {
  //     setAssignedUsers(roles)
  //   })
  // }, []);


  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password
      })
      window.localStorage.setItem(
        'loggedAppUser', JSON.stringify(user)
      )
      socket.emit('add_user', {username: user.username, name: user.name, userId: user.id});
      createNotification(`${user.name} has logged in`, setSuccessMessage, 5000)
      console.log(`Logging in with ${username}.`)
      notesService.setToken(user.token)
      props.setUser(user)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      createNotification('wrong credentials', setErrorMessage, 5000)
    }
  }


  // const handleLogout = async () => {
  //   await socket.emit('remove_user', {username:user.username, name: user.name, id: user.id})
  //   window.localStorage.removeItem('loggedAppUser')
  //   setUser(null);
  // }

  const handleCreateRole = async (event) => {
    event.preventDefault()
    try {
      const newRoleObject = {
        name: roleName.value,
        alignment: roleAlignment,
        description: roleDescription,
        actions: roleActions,
      }
      await rolesService.create(newRoleObject)
      createNotification(`${roleName.value} created!`, setSuccessMessage, 5000)
      rolesService
        .getAll().then(initialRoles => {
          setRoles(initialRoles)
        })
      setRoleActions('')
      roleName.reset()
      // setRoleName('')
      setRoleAlignment('')
      setRoleDescription('')
      setRoleBoolean('')
    } catch (error) {
      createNotification('could not create role', setErrorMessage, 5000);
      console.log(error)
    }
  }

  const handleCreateAccount = async (event) => {
    event.preventDefault()
    try {
      const newUserObject = {
        password: password,
        name: name,
        username: username
      }
      await accountService.createAccount(newUserObject)
      toggleUserButton()
      createNotification(`Welcome ${newUserObject.name}, your account has been created.`, setSuccessMessage, 5000);
    } catch (error) {
      createNotification('username already taken', setErrorMessage, 5000);
      console.log(error)
    }
  }

  const createNotification = (message, setNotification, time) => {
    setNotification(message)
    setTimeout(() => {
      setNotification(null)
    }, time)
  }

  const handleNoteSubmit = async (event) => {
    event.preventDefault()
    console.log(note)
    try{
      const newNoteObject = {
        content: note,
        user: user
      }
      await notesService.create(newNoteObject)
      createNotification('Note has been added', setSuccessMessage, 5000)
      toggleNoteForm()
      await notesService.getAll().then(newNotes => {
        setNotes(newNotes)
      })
    } catch(exception) {
      console.log(exception)
    }
  }

  const toggleUserButton = () => {
    setNewUserButton(!newUserButton)
  }

  const toggleNoteForm = () => {
    setShowNoteForm(!showNoteForm)
  }
  // event handlers
  const handleNoteChange = (event) => {
    setNote(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleRoleAlignmentChange = (event) => {
    setRoleAlignment(event.target.value)
  }

  const handleRoleDescriptionChange = (event) => {
    setRoleDescription(event.target.value)
  }

  const handleRoleActionsChange = (event) => {
    setRoleActions(event.target.value)
  }

  const handleRoleBooleanChange = (event) => {
    setRoleBoolean(event.target.value)
  }

  const handleDeleteNote =  async (event) => {
    event.preventDefault()
    if(window.confirm('are you sure you want to delete note?')) {
      console.log(event.target.id)
    }
    await notesService.deleteNote(event.target.id)
    createNotification(`note deleted`, setSuccessMessage, 5000)
    notesService
      .getAll().then(initialNotes => {
        setNotes(initialNotes)
      })
  }

  const handleDeleteRole = async (event) => {
    event.preventDefault()
    if(window.confirm('are you sure you want to delete note?')) {
      console.log(event.target.id);
    }
    await rolesService.deleteRole(event.target.id)
    rolesService
      .getAll().then(initialRoles => {
        setRoles(initialRoles)
      })
  }

  const newUserForm = () => {
    if (newUserButton) {
      return(
        <NewUser
          handleNameChange={handleNameChange}
          handleCreateAccount={handleCreateAccount}
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}/>
      )
    } else {
      return (
        <> </>
      )
    }
  }

  const testSocket = () => {
    if (socket) {
      socket.emit('button')
    }
  }

  const disconnectSocket = () => {
    if (socket) {
      socket.emit('disconnect')
    }
  }

  const testSocketLogin = () => {
    if (user) {
      socket.emit('login', user.name)
    } else {
      console.log('no user')
    }
  }

  const submitMessage = (event) => {
    event.preventDefault()
    if (user) {
      socket.emit('chat message', message)
      setMessage('')
    }
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  const addCurrentUser = () => {
    if (user) {
      socket.emit('add user', user.name)
    } else {
      console.log('no user')
    }
  }

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
    if (numberPlayers >= 4) {
      const inRoomUsers = Object.values(currentUsers)
      const currentGameThing = games.filter(game => game.numberPlayer === numberPlayers)[0]
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
      const assignedUsersArray = currentUsers.map((user, index) => {
        user = {
          ...user,
          role: rolesArray[index]
        }
        return user
      })
      return assignedUsersArray
    }
  }

  const loginForm = () => {
    if (newUserButton || user) {
      return (
        null
      )
    } else {
      return (
        <LoginForm
          handleLogin={handleLogin}
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}/>
      )
    }
  }
  return (
    <>
      <Router>
        <SkelNavbar
          toggleUserButton={toggleUserButton}
          user={user}
          handleLogout={handleLogout}
        />
        <Notification
          notificationColor={'danger'}
          notificationText={errorMessage}/>

        <Notification
          notificationColor={'success'}
          notificationText={successMessage}/>

        {loginForm()}
        {newUserForm()}

        <Switch>
          <Route path='/socketTests' component={() =>
            <SocketTests
              testSocket={testSocket}
              testSocketLogin={testSocketLogin}
              disconnectSocket={disconnectSocket}
              addCurrentUser={addCurrentUser}
            /> } />
          <Route path='/home' component={Home} />
          <Route path='/user_notes' render={() =>
            <UserNotes
              showNoteForm={showNoteForm}
              toggleNoteForm={toggleNoteForm}
              handleDeleteNote={handleDeleteNote}
              handleNoteSubmit={handleNoteSubmit}
              handleNoteChange={handleNoteChange}
              note={note}
            />}/>
          <Route path='/game_lobby' render={() =>
              <GameLobby
              handleStartGame={handleStartGame}
            />
          }/>
          <Route path='/role_card' component={RoleCard}/>
          <Route path='/create_role_form' render={() =>
            <CreateRoleForm
              handleDeleteRole={handleDeleteRole}
              roles={roles}
              roleAlignment={roleAlignment}
              roleName={roleName}
              roleDescription={roleDescription}
              roleBoolean={roleBoolean}
              roleActions={roleActions}
              handleCreateRole={handleCreateRole}
              // handleRoleNameChange={handleRoleNameChange}
              handleRoleAlignmentChange={handleRoleAlignmentChange}
              handleRoleDescriptionChange={handleRoleDescriptionChange}
              handleRoleActionsChange={handleRoleActionsChange}
              handleRoleBooleanChange={handleRoleBooleanChange}
            />}/>
        </Switch>
      </Router>
      {/* <LoginFormRedux /> */}
      <Chatroom message={message} handleMessageChange={handleMessageChange} submitMessage={submitMessage}/>
      {/* <Footer /> */}


    </>
  )
}

export default connect(null,
  {
  initializeNotes,
  initializeGames,
  initializeUsers,
  initializeRoles,
  setUser,
  setCurrentUsers,
  setCurrentNumberPlayers,
  setCurrentPlayerRoles,
  removeUser,
  addChatMessage
  }
)(App)

