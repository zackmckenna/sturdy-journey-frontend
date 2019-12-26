import React, { Dimensions } from 'react';
import { Card, Col, Row, Container, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import { connect } from 'react-redux'
import style from '../style/deckDrawer.css'
import getWindowDimensions from './getWindowDimensions'
import useWindowDimensions from './getWindowDimensions';

const DeckDrawer = (props) => {
  console.log(props.session)
  const height = window.innerHeight
  console.log(height)


  if (props.session.currentPlayerRoles)  {
    const userRole = props.session.currentPlayerRoles.filter(user => user.userId === props.session.localUser.id)[0]
    console.log(userRole)
    console.log(userRole.role)
    console.log(props.roles)
  return (
    <>
          <Draggable
            axis='y'
            defaultPosition={{x:0, y:350}}
            handle='.handle'
            bounds='deckContainer'
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
    </>
    )
  }
  return (
      <Draggable
      axis='y'
      // defaultPosition={{x:0, y:0}}
      // handle='.handle'
      bounds={{top:0}}
      // positionOffset='{x: 0%, y:0%}'
      >

      <Card className='sticky-bottom'>
        <CardBody >
          <CardTitle >DRAG ME</CardTitle>
          <CardSubtitle>START GAME</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
    </Draggable>
  )

}

const mapStateToProps = (state) => {
  return {
    session: state.session,
    roles: state.roles
  }
}

export default connect(mapStateToProps)(DeckDrawer)
