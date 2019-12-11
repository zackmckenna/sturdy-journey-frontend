import React, { useState, useEffect } from 'react';
import usersService from './services/users';
import notesService from './services/notes';
import accountService from './services/account';
import loginService from './services/login';
import socketService from './services/socket';
import socketIoClient from 'socket.io-client'
import LoginForm from './components/LoginForm';
import Notification from './components/Notification'
import NappzackNavbar from './components/NappzackNavbar';
import { Button, ButtonGroup } from 'reactstrap';
import NewUser from './components/NewUser';
import NoteForm from './components/NoteForm';

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
  const [socket, setSocket] = useState(null);
  const [currentUsers, setCurrentUsers] = useState([]);

  useEffect(() => {
    usersService
      .getAll().then(initialUsers => {
        setUsers(initialUsers)
      })
  }, [])

  useEffect(() => {
    if (!socket) {
      setSocket(socketIoClient('http://localhost:3001/'))
    }
    console.log('client already connected');
  }, [socket, setSocket]);

  useEffect(() => {
    if (socket){
        socket.on('set new users', user => {
        console.log(currentUsers)
        console.log(user)
        setCurrentUsers(currentUsers.concat(user))
        console.log(currentUsers)
      })
    }
  }, [socket, setCurrentUsers, currentUsers]);

  useEffect(() => {
    notesService
      .getAll().then(initialNotes => {
        setNotes(initialNotes)
      });
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
      socket.emit('login', user.name);
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

  const handleDeleteNote = (event) => {
    event.preventDefault()
    if(window.confirm('are you sure you want to delete note?')) {
      console.log(event.target.id);
    }
    notesService.deleteNote(event.target.id)
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

  const currentUserNotes = () => {
    if (user) {
      return (
        <>
        <h2>{user.name}'s Notes</h2>
          <ul>
            {notes.filter(note => note.user != null ? note.user.id === user.id : null)
                  .map(note => note ? <h6 key={note.id}>{note.content}<Button key={note.id} id={note.id} onClick={handleDeleteNote} className='btn-sm'>delete</Button></h6> : null)}
          </ul>
        </>
      )
    } else {
      return null
    }
  }

  const testSocket = () => {
    if (socket) {
      socket.emit('button');
    }
  }

  const connectSocket = () => {
    setSocket(socketIoClient('http://localhost:3001/'))
  }

  const disconnectSocket = () => {
    if (socket) {
      socket.emit('disconnect')
    }
  }

  const testSocketLogin = () => {
    if (user) {
      socket.emit('login', user.name);
    } else {
      console.log('no user')
    }
  }

  const addCurrentUser = () => {
    if (user) {
      socket.emit('add user', user.name);
    } else {
      console.log('no user')
    }
  }

  const showCurrentUsers = () => {
    if (currentUsers) {
      return (
        currentUsers.map(user => <p>{user}</p>)
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
      {currentUserNotes()}
      {noteForm()}
      <h1>All Users</h1>
      {users.map(user => <h4 key={user.id}>{user.name}</h4>)}
      <h1>All notes:</h1>
      {notes.map(note => <h5 id={note.id}>{note.content}</h5>)}

      <h1>concurrent users log:</h1>
      {showCurrentUsers()}

      <ButtonGroup>
        <Button color='primary' onClick={testSocket}>Socket.io Test</Button>
        <Button onClick={testSocketLogin}>Socket.io Test Login</Button>
        <Button color='success' onClick={connectSocket}>connect socket</Button>
        <Button color='danger' onClick={disconnectSocket}>disconnect socket</Button>
        <Button color='warning' onClick={addCurrentUser}>add current user</Button>
      </ButtonGroup>
    </>
  );
}


export default App;
