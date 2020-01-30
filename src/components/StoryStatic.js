import React from 'react'
import { connect } from 'react-redux'
import { Container, Card, Row, Col } from 'reactstrap'


const StoryStatic = (props) => {
  console.log(props.deck)
  if (props.deck.userRoleCard) {
    return (
      <Row>
        <Col className='text-light'>
          {props.deck.userRoleCard.story}
        </Col>
      </Row>
    )
  }
  return (
    <>
    </>
  )
  // if (props.deck.cards.filter(card => card.type === 'userRoleCard'))
}

const mapStateToProps = (state) => {
  return {
    session: state.session,
    roles: state.roles,
    deck: state.deck,
    airtable: state.airtable
  }
}

export default connect(mapStateToProps)(StoryStatic)
