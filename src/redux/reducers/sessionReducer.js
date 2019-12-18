import notesService from '../../services/notes'
import loginService from '../../services/login'

const sessionReducer = (state =[], action) => {
  switch (action.type) {
    case 'SET_USER':
      return state.concat(action.data)
  }
  return state
}

export const setUser = () => {
  console.log('set user run')
  const loggedAppUserJSON = window.localStorage.getItem('loggedAppUser')
  if (loggedAppUserJSON) {
    const user = JSON.parse(loggedAppUserJSON)
    notesService.setToken(user.token)
    return({
      type:'SET_USER',
      data: user
    })
  }
}

// export const loginUser = async () => {
//   try {

//   }
// }

// const handleLogin = async (event) => {
//   event.preventDefault()
//   try {
//     const user = await loginService.login({
//       username, password
//     })

//     window.localStorage.setItem(
//       'loggedAppUser', JSON.stringify(user)
//     )
//     socket.emit('add_user', {username: user.username, name: user.name, userId: user.id});
//     createNotification(`${user.name} has logged in`, setSuccessMessage, 5000)
//     console.log(`Logging in with ${username}.`)
//     notesService.setToken(user.token)
//     setUser(user)
//     setUsername('')
//     setPassword('')
//   } catch (exception) {
//     createNotification('wrong credentials', setErrorMessage, 5000)
//   }
// }

export default sessionReducer
