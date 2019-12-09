import React, { useState, useEffect } from 'react';
import rolesService from './services/roles';
import usersService from './services/users';
import accountService from './services/account';
import loginService from './services/login';
import LoginForm from './components/LoginForm';
import Notification from './components/Notification'
import NappzackNavbar from './components/NappzackNavbar';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import NewUser from './components/NewUser';
import createAccount from './services/account';


const App = () => {

  /*
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [games, setGames] = useState([]);
  */
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [newUserButton, setNewUserButton] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      console.log(`Logging in with ${username} ${password}.`)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
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
    if (newUserButton) {
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
      <NappzackNavbar toggleUserButton={toggleUserButton}/>

      <Notification
      notificationColor={'danger'}
      notificationText={errorMessage}/>

      {newUserForm()}
      {loginForm()}

    </>
  );
}


export default App;
