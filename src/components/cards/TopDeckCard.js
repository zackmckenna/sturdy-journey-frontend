import React from 'react'
import { Card, CardTitle, CardSubtitle, CardText, CardBody, Row, Col } from 'reactstrap'
import style from '../../style/card.css'

const TopDeckCard = ({ onClickNext }) => {

  return (
    <Card style={{ height: '556px' }} className='basicCard'>
      <Row>
        <Col className='text-right'>
          <button onClick={onClickNext}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
        </Col>
      </Row>
      <CardBody>
        <CardTitle className='cardTitle'><h2>The Deck</h2></CardTitle>
        <CardSubtitle className='cardSubtitle'>swipe left to reveal your role</CardSubtitle>
        <CardText className='cardText'>This deck holds your role card and a rule card displaying the relationship of the roles in the game.</CardText>
      </CardBody>
    </Card>
  )
}

export default TopDeckCard
