import React, { useEffect } from 'react'
import socket from '../socket/socket'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { deckClear } from '../redux/actions/deckActions'
import { clearCurrentPlayerRoles, setCurrentUsers, setCurrentNumberPlayers } from '../redux/actions/sessionActions'

const Socket = ({ history, clearCurrentPlayerRoles, deckClear, setCurrentUsers, setCurrentNumberPlayers }) => {

  useEffect(() => {
    socket.on('redirect', async route => {
      history.push(route)
    })
    socket.on('clear user roles', () => {
      console.log('clearing roles')
      clearCurrentPlayerRoles()
      deckClear()
    })
    socket.on('visitors', async users => {
      console.log(users)
      console.log('socket.io visitors command received')
      const filteredUsers = await users.filter(user => user != null)
      console.log(filteredUsers)
      setCurrentUsers(filteredUsers)
      setCurrentNumberPlayers(filteredUsers.length)
    // socket.on('chat message', async message => {
    //   console.log(message)
    //   props.addChatMessage(message, window.localStorage.loggedAppUser)
    // })
    })

  }, [history])

  return (
    <>
    </>
  )
}

const mapDispatchToProps = ({
  clearCurrentPlayerRoles: () => clearCurrentPlayerRoles(),
  deckClear: () => deckClear(),
  setCurrentNumberPlayers: (numberUsers) => setCurrentNumberPlayers(numberUsers),
  setCurrentUsers: (filteredUsers) => setCurrentUsers(filteredUsers)
})

export default withRouter(connect(null, mapDispatchToProps)(Socket))
