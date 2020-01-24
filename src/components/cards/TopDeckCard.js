import React from 'react'
import { Card, CardTitle, CardSubtitle, CardBody, Row, Col } from 'reactstrap'

const TopDeckCard = ({ onClickNext }) => {

  return (
    <Card>
      <Row>
        <Col className='text-right'>
          <button onClick={onClickNext}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
        </Col>
      </Row>
      <CardBody >
        <CardTitle className='text-center handle'>DRAG ME</CardTitle>
        <CardTitle ><h2>The Deck</h2></CardTitle>
        <CardTitle><h4>swipe left to reveal your role</h4></CardTitle>
        <CardSubtitle>you can move this card up and down to keep your role hidden from prying eyes</CardSubtitle>
      </CardBody>
    </Card>
  )
}

export default TopDeckCard
