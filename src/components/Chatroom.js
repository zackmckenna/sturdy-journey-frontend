import React from 'react'
import { connect } from 'react-redux'


const Chatroom = ({ messages }) => {
  return (
    <>
      {messages ? messages.map(message => <h1>message</h1>) : null}
    </>
  )
}

const mapStateToProps = function(state) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(Chatroom)
