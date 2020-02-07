import React from 'react'
import { Card, CardTitle, CardSubtitle, CardText, CardBody, Row, Col } from 'reactstrap'
import captain from '../../images/Small.png'
const TestingRoleCard = ({ card, onClickNext, onClickPrev }) => {

  return (
    <Card className='basicCard ml-2 mr-2'>
      <Row>
        <Col className='text-left'>
          <button onClick={onClickPrev}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
        </Col>
        {onClickNext ?  <Col className='text-right'>
          <button onClick={onClickNext}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
        </Col> : null}
      </Row>
      <CardBody style={{ padding: '10px', fontFamily: 'bitter' }}>
        <p className='cardSubtitle' style={{ margin: '0px' }}>Player Details</p>
        <CardTitle className='border-bottom cardTitle' style={{ fontSize: '27px' }}><img className='roleIcon' src={captain} alt='icon'/>The Mutineer</CardTitle>
        <CardSubtitle className='cardSubtitle'>Objective:</CardSubtitle>
        <CardTitle className='cardText'>As the Mutineer, you must sow discord and confusion among the crew and secretly aid the <span className='cardTextHighlight'>Seawitch</span> in their pursuit of the <span className='cardTextHighlight'>Lookout</span></CardTitle>
        <CardSubtitle className='cardSubtitle'>Allies:</CardSubtitle>
        <CardText className='cardTextHighlight'>The Seawitch</CardText>
        <CardSubtitle className='cardSubtitle'>Tips:</CardSubtitle>
        <CardText className='cardText'>You must aim to blend in amongst the Crew at all cost!</CardText>
      </CardBody>
    </Card>
  )
}

export default TestingRoleCard
