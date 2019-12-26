import React from 'react';
import {
  Container, Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row
} from 'reactstrap';
import Rules from './Rules'
import DeckDrawer from './DeckDrawer'
import { connect } from 'react-redux'
import style from '../style/roleCard.css'

const RoleCard = (props) => {
  return (
    <>
    <Container className='mt-2 border roleContainer'>
      <Container className='ruleContainer'>
        <Rules />
      </Container>
      <Row>
        <Col className='text-light text-center'>
          <h5>You must start a game to get a role card.</h5>
        </Col>
      </Row>
      <Container className='fixed-bottom border deckContainer'>
        <DeckDrawer />
      </Container>
    </Container>
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
