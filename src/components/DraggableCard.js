import React from 'react'
import { connect } from 'react-redux'
import { Card, Row, Col, Container, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import Draggable from 'react-draggable' // Both at the same time
import ReactSwipe from 'react-swipe'

import { TEMPGAMES } from '../shared/tempGames'

const DraggableCard = (props) => {

  console.log(TEMPGAMES[1])
  console.log(TEMPGAMES[1].roles)

  let reactSwipeEl;

  if (props.session.currentPlayerRoles)  {
    const userRole = props.session.currentPlayerRoles.filter(user => user.userId === props.session.localUser.id)[0]
    console.log(userRole)
    console.log(userRole.role)
    console.log(props.roles)

    // gets temporary local data for testing games
    const roleDescriptors = TEMPGAMES[1].roles.filter(role => role.key === userRole.role)[0]

    return (
      <Draggable
        axis='y'
        // defaultPosition={{x:0, y:350}}
        // handle='.handle'
        bounds={{ top:0 }}
      >
        <Container>
          {/* <button onClick={() => reactSwipeEl.next()}>Next</button>
          <button onClick={() => reactSwipeEl.prev()}>Previous</button> */}
          <ReactSwipe
            className="carousel"
            swipeOptions={{ continuous: false }}
            ref={el => (reactSwipeEl = el)}
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
                <CardBody >
                  <CardTitle className='text-center handle'>DRAG ME</CardTitle>
                  <CardTitle ><h2>The Deck</h2></CardTitle>
                  <CardTitle><h4>swipe left to reveal your role</h4></CardTitle>
                  <CardSubtitle>you can move this card up and down to keep your role hidden from prying eyes</CardSubtitle>
                  <CardSubtitle>If you continue to swipe left, you will be able to view other cards, their descriptions and strategies.</CardSubtitle>
                  <CardSubtitle>Good luck!</CardSubtitle>
                </CardBody>
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
                <CardBody >
                  <CardTitle className='text-center handle'>DRAG ME</CardTitle>
                  <CardTitle><h2>Your Role Card</h2></CardTitle>
                  <CardTitle><h4>you are the {userRole.role}</h4></CardTitle>
                  <CardSubtitle>{roleDescriptors.team}</CardSubtitle>
                  <CardText>{roleDescriptors.description}</CardText>
                  <CardText>{roleDescriptors.strategy}</CardText>
                  {roleDescriptors.canStop ? <CardText>You can stop game by calling out:</CardText> : <CardText>You can not stop the game.</CardText>}
                  {roleDescriptors.canCall.map(role => <CardText key={role.id}>{role.key}</CardText>)}
                </CardBody>
              </Card>
            </div>
            {TEMPGAMES[1].roles.map(role => {
              console.log(role)
              return (
                <div key={role.id}>
                  <Card>
                    <Row>
                      <Col className='text-left'>
                        <button onClick={() => reactSwipeEl.prev()}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
                      </Col>
                      <Col className='text-right'>
                        <button onClick={() => reactSwipeEl.next()}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                      </Col>
                    </Row>
                    <CardBody >
                      <CardTitle className='text-center handle'>DRAG ME</CardTitle>
                      <CardTitle><h2>{role.roleName}</h2></CardTitle>
                      <CardTitle><h4>{role.team}</h4></CardTitle>
                      <CardSubtitle>{role.description}</CardSubtitle>
                      <CardText>{role.strategy}</CardText>
                    </CardBody>
                  </Card>
                </div>
              )
            })}
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
                <CardBody >
                  <CardTitle className='text-center handle'>DRAG ME</CardTitle>
                  <CardTitle><h2>Im another example card</h2></CardTitle>
                  <CardTitle><h4>here is another role card</h4></CardTitle>
                  <CardSubtitle>This is some text about the role</CardSubtitle>
                  <CardText>Allies Example Text: First Mate, Lookout, Captian</CardText>
                  <CardText>Description: example text ipsum whatever lorem whatever</CardText>
                  <CardText>Description: example text ipsum whatever lorem whatever</CardText>
                </CardBody>
              </Card></div>
            <div></div>
          </ReactSwipe>

          {/* <Card>
          <CardBody >
          <CardTitle className='text-center handle'>DRAG ME</CardTitle>
          <CardTitle><h2>Role Card</h2></CardTitle>
          <CardTitle><h4>you are the DEMO</h4></CardTitle>
          <CardSubtitle>This is some text about the role</CardSubtitle>
          <CardText>Allies Example Text: First Mate, Lookout, Captian</CardText>
          <CardText>Description: example text ipsum whatever lorem whatever</CardText>
        </CardBody>
      </Card> */}
        </Container>
      </Draggable>
    )
  } else {
    return (
      <Draggable
        axis='y'
        // defaultPosition={{x:0, y:350}}
        // handle='.handle'

        bounds={{ top:0, bottom: 275 }}
      >
        <Container>
          {/* <button onClick={() => reactSwipeEl.next()}>Next</button>
        <button onClick={() => reactSwipeEl.prev()}>Previous</button> */}
          <ReactSwipe
            className="carousel"
            swipeOptions={{ continuous: false }}
            ref={el => (reactSwipeEl = el)}
          >
            <div>
              <Card>
                <Row>
                  <Col className='text-right'>
                    <button onClick={() => reactSwipeEl.next()}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                  </Col>
                </Row>
                <CardBody >
                  <CardTitle className='text-center handle'>DRAG ME</CardTitle>
                  <CardTitle ><h2>The Deck</h2></CardTitle>
                  <CardTitle><h4>swipe left to reveal your role</h4></CardTitle>
                  <CardSubtitle>you can move this card up and down to keep your role hidden from prying eyes</CardSubtitle>
                </CardBody>
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
                <CardBody >
                  <CardTitle className='text-center handle'>DRAG ME</CardTitle>
                  <CardTitle><h2>Role Card</h2></CardTitle>
                  <CardTitle><h4>you are the DEMO</h4></CardTitle>
                  <CardSubtitle>This is some text about the role</CardSubtitle>
                  <CardText>Allies Example Text: First Mate, Lookout, Captian</CardText>
                  <CardText>Description: example text ipsum whatever lorem whatever</CardText>
                  <CardText>Description: example text ipsum whatever lorem whatever</CardText>
                  <CardText>Description: example text ipsum whatever lorem whatever</CardText>
                  <CardText>Description: example text ipsum whatever lorem whatever</CardText>
                </CardBody>
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
                <CardBody >
                  <CardTitle className='text-center handle'>DRAG ME</CardTitle>
                  <CardTitle><h2>Im another role card</h2></CardTitle>
                  <CardTitle><h4>here is another role card</h4></CardTitle>
                  <CardSubtitle>This is some text about the role</CardSubtitle>
                  <CardText>Allies Example Text: First Mate, Lookout, Captian</CardText>
                  <CardText>Description: example text ipsum whatever lorem whatever</CardText>
                  <CardText>Description: example text ipsum whatever lorem whatever</CardText>
                </CardBody>
              </Card>
            </div>
            <div></div>
          </ReactSwipe>

          {/* <Card>
            <CardBody >
            <CardTitle className='text-center handle'>DRAG ME</CardTitle>
            <CardTitle><h2>Role Card</h2></CardTitle>
            <CardTitle><h4>you are the DEMO</h4></CardTitle>
            <CardSubtitle>This is some text about the role</CardSubtitle>
            <CardText>Allies Example Text: First Mate, Lookout, Captian</CardText>
            <CardText>Description: example text ipsum whatever lorem whatever</CardText>
          </CardBody>
        </Card> */}
        </Container>
      </Draggable>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.session,
    roles: state.roles
  }
}

export default connect(mapStateToProps)(DraggableCard)
