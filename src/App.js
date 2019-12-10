import React, { useState, useEffect } from 'react';
import rolesService from './services/roles';
import usersService from './services/users';
import notesService from './services/notes';
import accountService from './services/account';
import loginService from './services/login';
import LoginForm from './components/LoginForm';
import Notification from './components/Notification'
import NappzackNavbar from './components/NappzackNavbar';
import { Button } from 'reactstrap';
import NewUser from './components/NewUser';
import NoteForm from './components/NoteForm';
import notes from './services/notes';

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
  const [userNotes, setUserNotes] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [newUserButton, setNewUserButton] = useState(null);
  const [showNoteForm, setShowNoteForm] = useState(null)

  useEffect(() => {
    usersService
      .getAll().then(initialUsers => {
        setUsers(initialUsers)
      })
  }, [])

  useEffect(() => {
    notesService
      .getAll().then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  useEffect(() => {
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
      console.log(user)

      createNotification(`${user.name} has logged in`, setSuccessMessage, 5000)

      console.log(`Logging in with ${username} ${password}.`)
      notesService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      console.log(user)
    } catch (exception) {
      createNotification('wrong credentials', setErrorMessage, 5000)
    }
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedAppUser')
    setUser(null);
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
      setSuccessMessage(`Welcome ${newUserObject.name}, your account has been created.`)
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
    } catch (exception) {
      console.log(exception)
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
    setNote(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
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

  const noteForm = () => {
    if (showNoteForm) {
      return (
        <NoteForm
          handleNoteSubmit={handleNoteSubmit}
          handleNoteChange={handleNoteChange}
          toggleNoteForm={toggleNoteForm}/>
      )
    } else {
      return null
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
      <NappzackNavbar
        toggleUserButton={toggleUserButton}
        user={user}
        handleLogout={handleLogout}/>

      <Notification
      notificationColor={'danger'}
      notificationText={errorMessage}/>

      <Notification
      notificationColor={'success'}
      notificationText={successMessage}/>

      {newUserForm()}
      {loginForm()}
      {user ? <Button onClick={toggleNoteForm}>Add Note</Button> : null}
      <h2>Current user notes</h2>
      {console.log(notes.map(note => note))}
      {noteForm()}
      <h1>All Users</h1>
      {users.map(user => <h4 key={user.id}>{user.name}</h4>)}
      <h1>All notes:</h1>
      {notes.map(note => <h5 id={note.id}>{note.content}</h5>)}



    </>
  );
}


export default App;
