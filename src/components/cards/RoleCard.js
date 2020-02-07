import React from 'react'
import { Card, CardTitle, CardSubtitle, CardBody, CardText, Row, Col } from 'reactstrap'

const RoleCard = ({ card, onClickNext, onClickPrev }) => {

  return (
    <Card style={{ height: '556px' }} className='ml-2 mr-2'>
      <Row>
        <Col className='text-left'>
          <button onClick={onClickPrev}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
        </Col>
        {onClickNext ?  <Col className='text-right'>
          <button onClick={onClickNext}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
        </Col> : null}
      </Row>
      <CardBody >
        <CardTitle className='text-center handle'></CardTitle>
        <CardTitle ><h2>{card.name}</h2></CardTitle>
        <CardSubtitle>{card.team}</CardSubtitle>
        <CardTitle><h4>{card.description}</h4></CardTitle>
      </CardBody>
      <CardBody >
        <p className='cardSubtitle' style={{ margin: '0px' }}>Player Details</p>
        <CardTitle className='border-bottom cardTitle' style={{ fontSize: '27px' }}>{card.name}</CardTitle>
        <CardSubtitle className='cardSubtitle'>Objective:</CardSubtitle>
        <CardTitle className='cardText'>{card.description} </CardTitle>
        <CardSubtitle className='cardSubtitle'>Allies:</CardSubtitle>
        <CardText className='cardTextHighlight'>{card.allies.map(ally => ally)}</CardText>
        <CardSubtitle className='cardSubtitle'>Tips:</CardSubtitle>
        <CardText className='cardText'>You must aim to blend in amongst the Crew at all cost!</CardText>
      </CardBody>
    </Card>
  )
}

export default RoleCard
