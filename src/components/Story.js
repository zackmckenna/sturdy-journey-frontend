import React from 'react'
import { connect } from 'react-redux'
import { Container, Card, Row, Col } from 'reactstrap'
import Draggable from 'react-draggable' // Both at the same time
import ReactSwipe from 'react-swipe'

const Story = (props) => {

  let reactSwipeEl
  console.log(props.deck.cards.filter(card => card.type === 'userRoleCard'))

  return (
    <Draggable
      axis='y'
      bounds={{ top:0 }}
    >
      <Container>
        <ReactSwipe
          className="carousel"
          disableScroll={true}
          stopPropagation={true}
          swipeOptions={{ continuous: false }}
          ref={el => (reactSwipeEl = el)}
          childCount={props.deck.cards.length}
        >
          <div>
            <Card>
              <Row>
                <Col className='text-left'>
                  <button onClick={() => reactSwipeEl.prev()}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                </Col>
                <Col className='text-right'>
                  <button onClick={() => reactSwipeEl.next()}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                </Col>
              </Row>
              Story
            </Card>
          </div>
          <div>
            <Card>
              <Row>
                <Col className='text-left'>
                  <button onClick={() => reactSwipeEl.prev()}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                </Col>
                <Col className='text-right'>
                  <button onClick={() => reactSwipeEl.next()}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                </Col>
              </Row>
              Story
            </Card>
          </div>
          <div>
            <Card>
              <Row>
                <Col className='text-left'>
                  <button onClick={() => reactSwipeEl.prev()}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                </Col>
                <Col className='text-right'>
                  <button onClick={() => reactSwipeEl.next()}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                </Col>
              </Row>
              Story
            </Card>
          </div>
        </ReactSwipe>
      </Container>
    </Draggable>
  )
}

const mapStateToProps = (state) => {
  return {
    session: state.session,
    roles: state.roles,
    deck: state.deck,
    airtable: state.airtable
  }
}

export default connect(mapStateToProps)(Story)
