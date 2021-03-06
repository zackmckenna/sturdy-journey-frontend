import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Container, Card } from 'reactstrap'
import SvgFirstMate from './SvgFirstMate'
import style from '../style/usersInRoom.css'

const UsersInRoom = ({ session }) => {

  if (session.currentUsers && session.localUser) {

    // let usersToDistribute = session.currentUsers
    // let emptyComponents = 10 - usersToDistribute.length

    return (
      <>
        <Row>
          <Col className='text-center text-light'>
            <h6>Welcome {session.localUser.username}!</h6>
          </Col>
        </Row>
        <Row>
          <Col className='text-center text-light'>
            <h5>Waiting for up to 10 bucanneers to join.</h5>
          </Col>
        </Row>
        <Row>
          <Col className='text-light text-center'>
            <h2>People in Room: {session.currentNumberPlayers}</h2>
            {/* {session.currentUsers.map(user => <li ky={user.id}>{user.username}</li>)} */}
            <Container>
              <Row>
                {session.currentUsers.map((user, index) => {
                  return (
                    <Card key={user.userId} style={style.cardBlue} className='cardBlue text-light text-center'>
                      <SvgFirstMate />
                      <h4>{user.username}</h4>
                    </Card>
                  )
                })}
              </Row>
            </Container>
          </Col>
        </Row>
      </>
    )
  } else {
    return null
  }
}

const mapStateToProps = (state) => ({
  session: state.session
})

export default connect(mapStateToProps)(UsersInRoom)
