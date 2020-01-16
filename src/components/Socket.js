import React, { useEffect } from 'react'
import socket from '../socket/socket'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { deckClear, initializeDeck, addRoleCardToDeck } from '../redux/actions/deckActions'
import { clearCurrentPlayerRoles, setCurrentPlayerRoles, setCurrentUsers, setCurrentNumberPlayers } from '../redux/actions/sessionActions'

const Socket = ({ history,
  clearCurrentPlayerRoles,
  deckClear,
  setCurrentUsers,
  setCurrentNumberPlayers,
  setCurrentPlayerRoles,
  initializeDeck,
  addRoleCardToDeck,
  roleCards }) => {

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
    })
    console.log('opening distribute roles socket . . .')
    socket.on('distribute roles', async roles => {
      await setCurrentPlayerRoles(roles)
      console.log('distribute roles received')
      deckClear()
      initializeDeck(roleCards)
      addRoleCardToDeck(roles)
    })
    // socket.on('chat message', async message => {
    //   console.log(message)
    //   props.addChatMessage(message, window.localStorage.loggedAppUser)
    // })
  }, [history])

  return (
    <>
    </>
  )
}

const mapDispatchToProps = ({
  clearCurrentPlayerRoles: () => clearCurrentPlayerRoles(),
  deckClear: () => deckClear(),
  setCurrentNumberPlayers: numberUsers => setCurrentNumberPlayers(numberUsers),
  setCurrentUsers: filteredUsers => setCurrentUsers(filteredUsers),
  setCurrentPlayerRoles: roles => setCurrentPlayerRoles(roles),
  initializeDeck: deck => initializeDeck(deck),
  addRoleCardToDeck: roles => addRoleCardToDeck(roles)
})

const mapStateToProps = state => ({
  roleCards: state.airtable.roleCards
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Socket))
