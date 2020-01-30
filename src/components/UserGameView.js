import React, { useState, useEffect } from 'react'
import {
  Container,
  Col,
  Row,
  Button
} from 'reactstrap'
import Rules from './Rules'
import DraggableCard from './DraggableCard'
import { connect } from 'react-redux'
// import style from '../style/roleCard.css'
import '../style/roleCard.css'

const RoleCard = (props) => {
  const [users, setUsers] =  useState(0)

  useEffect(() => {
    if (props.currentGameSession.currentUsers){
      setUsers(props.currentGameSession.currentUsers.length)
    }
  }, [])

  console.log(props.currentGameSession)
  return (
    <>
    <Container className='mt-3 roleContainer'>
      <Container className='ruleContainer'>
        <Row>
          <Col className='text-light sm-12'>
            There are {users} buccaneers aboard.
          </Col>
        </Row>
        <Rules />
      </Container>
      <Container className='mt-3'>
        <Row>
          <Col className='text-light text-center'>
            <Button className='mt-4'>
              Clear Game
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className='fixed-bottom deckContainer'>
        <DraggableCard />
      </Container>
    </Container>
    </>
  )
}

const mapStateToProps = function(state) {
  return {
    currentGameSession: state.session,
    roles: state.roles
  }
}

export default connect(mapStateToProps)(RoleCard)
