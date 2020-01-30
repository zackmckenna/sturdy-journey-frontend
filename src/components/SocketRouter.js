import React, { useEffect } from 'react'
import socket from '../socket/socket'
import { withRouter } from 'react-router-dom'

const SocketRouter = ({ history }) => {

  useEffect(() => {
    socket.on('redirect', async route => {
      history.push(route)
    })
  }, [history])

  return (
    <>
    </>
  )
}

export default withRouter(SocketRouter)
