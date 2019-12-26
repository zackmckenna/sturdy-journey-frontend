import React, { Dimensions } from 'react';
import { Card, Col, Row, Container, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import { connect } from 'react-redux'
import DraggableCard from './DraggableCard'
import style from '../style/deckDrawer.css'
import CardComponent from './DraggableCard'
import Rules from './Rules'
import ReactSwipe from 'react-swipe'

const DeckDrawer = (props) => {
  let reactSwipeEl
  console.log(props.session)
  const height = window.innerHeight
  console.log(height)


  if (props.session.currentPlayerRoles)  {
    const userRole = props.session.currentPlayerRoles.filter(user => user.userId === props.session.localUser.id)[0]
    console.log(userRole)
    console.log(userRole.role)
    console.log(props.roles)
  return (
          <DraggableCard />
    )
  }
  return (
      <DraggableCard />
  )

}

const mapStateToProps = (state) => {
  return {
    session: state.session,
    roles: state.roles
  }
}

export default connect(mapStateToProps)(DeckDrawer)
