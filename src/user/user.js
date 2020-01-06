import notesService from '../services/notes'
import loginService from '../services/login'
import accountService from '../services/account'
import socket from '../socket/socket'

export const loginUser = async (username, password) => {
  const user = await loginService.login({
    username, password
  })
  window.localStorage.setItem('loggedAppUser', JSON.stringify(user))
  if (user) {
    notesService.setToken(user.token)
  }
  socket.emit('add_user', { username: user.username, name: user.name, userId: user.id })
}

export const removeUserFromSession = (user) => {
  socket.emit('remove_user', { username:user.username, name: user.name, id: user.id })
  window.localStorage.removeItem('loggedAppUser')
}

export const createAccount = async (username, name, password) => {
  const newUserObject = {
    password: password,
    name: name,
    username: username
  }
  try{
    const response = await accountService.createAccount(newUserObject)
    console.log(response)
  } catch (exception){
    console.log('error:')
    console.log(exception)
  }
}


