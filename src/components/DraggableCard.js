import React from 'react'
import { connect } from 'react-redux'
import { Card, Col, Row, Container, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import ReactSwipe from 'react-swipe'

const DraggableCard = (props) => {
  let reactSwipeEl;

  if (props.session.currentPlayerRoles)  {
    const userRole = props.session.currentPlayerRoles.filter(user => user.userId === props.session.localUser.id)[0]
    console.log(userRole)
    console.log(userRole.role)
    console.log(props.roles)
    return (
      <Draggable
      axis='y'
      // defaultPosition={{x:0, y:350}}
      // handle='.handle'
      bounds={{top:0}}
      >
      <Card>
        <CardBody >
          <CardTitle className='text-center handle'>DRAG ME</CardTitle>
          <CardTitle><h2>Role Card</h2></CardTitle>
          <CardTitle><h4>you are the {userRole.role}</h4></CardTitle>
          <CardSubtitle>This is some text about the role</CardSubtitle>
          <CardText>Allies Example Text: First Mate, Lookout, Captian</CardText>
          <CardText>Description: example text ipsum whatever lorem whatever</CardText>
        </CardBody>
      </Card>
      </Draggable>
    )
    } else {
      return (
        <Draggable
      axis='y'
      // defaultPosition={{x:0, y:350}}
      // handle='.handle'
      bounds={{top:0}}
      >
        <Container>
        <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button>
        <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
        <div>
          <Card>
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
        <div><Card>
            <CardBody >
              <CardTitle className='text-center handle'>DRAG ME</CardTitle>
              <CardTitle><h2>I'm another role card</h2></CardTitle>
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
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.session,
    roles: state.roles
  }
}

export default connect(mapStateToProps)(DraggableCard)
