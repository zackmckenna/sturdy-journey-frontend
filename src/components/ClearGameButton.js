import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'
import { setAlert } from '../redux/actions/notificationActions'
import socket from '../socket/socket'

const ClearGameButton = ({ history, dispatch }) => {

  const handleClick = () => {
    socket.emit('clear game')
    dispatch(setAlert('game cleared', false))
    history.push('/game_lobby')
  }
  return (
    <Button onClick={() => handleClick()}>clear game</Button>
  )
}

export default withRouter(connect(null)(ClearGameButton))
