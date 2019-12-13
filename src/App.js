import React, { useState, useEffect } from 'react';
import { useField } from './hooks'

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
import NappzackNavbar from './components/SkelNavbar';
import TotalUsers from './components/TotalUsers'
import UserNotes from './components/UserNotes'
import Home from './components/Home'
import SocketTests from './components/SocketTests'
import NewUser from './components/NewUser'
import TotalNotes from  './components/TotalNotes'
// import Footer from './components/PageFooter'
import CurrentUserDisplay from './components/CurrentUsersDisplay'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateRoleForm from './components/CreateRoleForm';

// initialize socket.io socket
const socket = socketIoClient('http://localhost:3001/')

const App = () => {
  /*
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [games, setGames] = useState([]);
  */
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])
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

  //to do: finish moving all of these to custom hooks
  const roleName = useField('text')
  const [roleAlignment, setRoleAlignment] = useState('')
  const [roleDescription, setRoleDescription] = useState('')
  const [roleActions, setRoleActions] = useState('')
  const [roleBoolean, setRoleBoolean] = useState(null)

  // const createGameName = useField('text')
  // const createMinPlayers = useField('number')
  // const createMaxPlayers = useField('number')
  // const createGameType = useField('text')
  // const createNumberPlayers = useField('number')
  // const createNumberCaptian = useField('number')
  // const createNumberMate = useField('number')
  // const createNumberMutineer = useField('number')
  // const createNumberFirstmate = useField('number')
  // const createNumberGood = useField('number')
  // const createNumberEvil = useField('number')

  useEffect(() => {
    usersService
      .getAll().then(initialUsers => {
        setUsers(initialUsers)
      })
  }, [])

  useEffect(() => {
    gamesService
      .getAll().then(initialGames => {
        setGames(initialGames)
      })
  }, [])

  useEffect(() => {
    gamesService
      .getAll().then(initialGames => {
        setGames(initialGames)
        console.log(initialGames)
      })
  }, [])

  // useEffect(() => {
  //   if (!socket) {
  //     setSocket(socketIoClient('http://localhost:3001/'))
  //   }
  //   console.log('socket client connected');
  // }, [socket, setSocket]);


  // useEffect(() => {
  //   console.log('visitor use effect run')
  //   socket.on('visitors', users => {
  //     console.log(users)
  //     setEffectCounter(effectCounter+1)
  //     console.log(effectCounter)
  //   })
  // }, [])

  useEffect(() => {
    console.log('use effect ran, component mounted')
    socket.on('visitors', users => {
      const filteredUsers = users.filter(user => user !== null)
      setCurrentUsers(filteredUsers);
      numberPlayers !== filteredUsers.length ? setNumberPlayers(filteredUsers.length) : console.log('players up to date')
    })
  }, []);

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
        console.log(initialRoles)
        console.log(roles)
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
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      createNotification('wrong credentials', setErrorMessage, 5000)
    }
  }


  const handleLogout = async () => {
    await socket.emit('remove_user', {username:user.username, name: user.name, id: user.id})
    window.localStorage.removeItem('loggedAppUser')
    setUser(null);
  }

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
    console.log(username)
    console.log(name)
    console.log(password)
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

  // all of these event handlers can be removed once custom hooks are refactored in
  //role event listeners
  // const handleRoleNameChange = (event) => {
  //   setRoleName(event.target.value);
  // }

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

  const addCurrentUser = () => {
    if (user) {
      socket.emit('add user', user.name)
    } else {
      console.log('no user')
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
        <NappzackNavbar
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
          <Route path='/total_users' render={() => <TotalUsers users={users}/>}/>
          <Route path='/user_notes' render={() =>
            <UserNotes
              showNoteForm={showNoteForm}
              user={user}
              toggleNoteForm={toggleNoteForm}
              notes={notes}
              handleDeleteNote={handleDeleteNote}
              handleNoteSubmit={handleNoteSubmit}
              handleNoteChange={handleNoteChange}
              note={note}
            />}/>
          <Route path='/total_notes' render={() => <TotalNotes notes={notes}/>}/>
          <Route path='/current_logged_users' render={() =>
            <CurrentUserDisplay
              numberPlayers={numberPlayers}
              currentUsers={currentUsers}
              games={games}
            />
          }/>

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

      {/* <Footer /> */}

    </>
  )
}


export default App
