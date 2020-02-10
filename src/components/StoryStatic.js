import React from 'react'
import { connect } from 'react-redux'
import { Container, Card, Row, Col } from 'reactstrap'


const StoryStatic = (props) => {
  console.log(props.deck)
  if (props.deck.userRoleCard) {
    return (
      <Container className='storyContainer'>
        <Row>
          <Col >
            Heres Your Story
            {props.deck.userRoleCard.story}
          </Col>
        </Row>
      </Container>
    )
  }
  return (
    <>
      <Container fluid style={{ backgroundColor: '#E3E0E6' }} className='storyContainer'>
        <Row>
          <Col className='text-center storyTitle'>
            Heres Your Story
          </Col>
        </Row>
      </Container>
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
