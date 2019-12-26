import React from 'react';
import {
  Container, Col, Row
} from 'reactstrap';
import Rules from './Rules'
import DeckDrawer from './DeckDrawer'
import { connect } from 'react-redux'
import style from '../style/roleCard.css'

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
            <h5>You must start a game to get a role card.</h5>
          </Col>
        </Row>
      </Container>
      <Container className='fixed-bottom deckContainer'>
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
