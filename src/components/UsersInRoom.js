import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Container, Card, Button } from 'reactstrap'
import SvgFirstMate from './SvgFirstMate'


const UsersInRoom = ({ session }) => {
  let usersToDistribute = session.currentUsers
  let emptyComponents = 10 - usersToDistribute.length

  console.log(usersToDistribute)
  console.log(emptyComponents)
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
        {/* {session.currentUsers.map(user => <li ky={user.id}>{user.username}</li>)} */}
        <Container>
          <Row>
          {session.currentUsers.map((user, index) => {
            return (

                <Card className='text-light text-center' key={user.id}>
                  <SvgFirstMate />
                  {/* <h8>{user.username}</h8> */}
                </Card>
            )
          })}
          </Row>
        </Container>
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
