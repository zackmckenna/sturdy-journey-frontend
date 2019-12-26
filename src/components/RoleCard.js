import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row
} from 'reactstrap';
import Rules from './Rules'
import { SwipeableDrawer } from '@material-ui/core';

import { connect } from 'react-redux'


const RoleCard = ({
  currentGameSession,
  roles}) => {
  console.log(currentGameSession.currentPlayerRoles)

  const displayCard = () => {
    if (currentGameSession.currentPlayerRoles)  {
      const userRole = currentGameSession.currentPlayerRoles.filter(user => user.userId === currentGameSession.localUser.id)[0]
      console.log(userRole)
      console.log(userRole.role)
      console.log(roles)
      return (
        <div>
          <Rules />
          <Card>
            <CardBody>
              <CardTitle>{userRole.role}</CardTitle>
              <CardSubtitle>{userRole.role}</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
      )
    } else {
      return (
        <Row>
          <Col>
            <Rules />
            <h2>You must start a game to get a role card.</h2>
          </Col>
        </Row>
      )
    }
  }
  return (
    <>
      {displayCard()}
    </>
  );
};

const mapStateToProps = function(state) {
  return {
    currentGameSession: state.session,
    roles: state.roles
  }
}

export default connect(mapStateToProps)(RoleCard);
