import React, { useState, useEffect } from 'react';
import rolesService from './services/roles';
import usersService from './services/users';
import notesService from './services/notes';
import accountService from './services/account';
import loginService from './services/login';
import LoginForm from './components/LoginForm';
import Notification from './components/Notification'
import NappzackNavbar from './components/NappzackNavbar';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import NewUser from './components/NewUser';
import createAccount from './services/account';
import { setUseProxies } from 'immer';


const App = () => {

  /*
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [games, setGames] = useState([]);
  */
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [newUserButton, setNewUserButton] = useState(null);

  useEffect(() => {
    usersService
      .getAll().then(initialUsers => {
        setUsers(initialUsers)
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
      console.log(`Logging in with ${username} ${password}.`)
      notesService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      console.log(user)
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
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
    } catch (exception) {
      console.log(exception)
    }
  }


  const toggleUserButton = () => {
    setNewUserButton(!newUserButton)
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

      {newUserForm()}
      {loginForm()}
      <h1>Current User</h1>
      {user ? <h2>{user.name}</h2> : null }
      <h1>All Users</h1>
      {users.map(user => <h4 key={user.id}>{user.name}</h4>)}
    </>
  );
}


export default App;
