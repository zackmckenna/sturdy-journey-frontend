import React from 'react'
import { connect } from 'react-redux'
import { Form, FormGroup, Input, Button } from 'reactstrap'


const Chatroom = ({ message, messages, submitMessage, handleMessageChange }) => {
  console.log(messages.messages)
  return (

    <>
      <Form onSubmit={submitMessage}>
        <FormGroup>
          <Input onChange={handleMessageChange} type='text' value={message}></Input>
          <Button>Submit</Button>
        </FormGroup>
      </Form>
      {/* {messages ? messages.map(message => <h1>message</h1>) : null} */}
    </>
  )
}

const mapStateToProps = function(state) {
  return {
    messages: state.session
  }
}

export default connect(mapStateToProps)(Chatroom)
