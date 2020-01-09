import React, { useEffect } from 'react'
import socket from '../socket/socket'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const Socket = ({ history }) => {

  useEffect(() => {
    socket.on('redirect', async route => {
      console.log(route)
      console.log('redirect')
      history.push(route)
    })
  }, [history])

  return (
    <>
    </>
  )
}

export default withRouter(connect(null)(Socket))
