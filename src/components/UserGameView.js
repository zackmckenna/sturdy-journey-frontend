import React from 'react'
import {
  Container,
  Col,
  Row
} from 'reactstrap'
import Rules from './Rules'
import DraggableCard from './DraggableCard'
import { connect } from 'react-redux'
// import style from '../style/roleCard.css'
import '../style/roleCard.css'

const RoleCard = (props) => {
  return (
    <>
    <Container className='mt-3 roleContainer'>
      <Container className='ruleContainer'>
        <Rules />
      </Container>
      <Container className='mt-3'>
        <Row>
          <Col className='text-light text-center'>
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
