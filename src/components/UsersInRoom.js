import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'reactstrap'


const UsersInRoom = ({ session }) => {
  return (
    <>
      <Row>
        <Col className='text-center text-light'>
          <h6>Welcome {session.localUser.username}!</h6>
        </Col>
      </Row>
      <Row>
        <Col className='text-center text-light'>
          <h7>Waiting for up to 10 bucanneers to join.</h7>
        </Col>
      </Row>

      <h2>People in Room: {session.currentNumberPlayers}</h2>
      <ul>
        {session.currentUsers.map(user => <li ky={user.id}>{user.username}</li>)}
        <Row>
          {session.currentUsers.map(user => {
            
          })}
        </Row>
      </ul>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    session: state.session
  }
}

export default connect(mapStateToProps)(UsersInRoom)
