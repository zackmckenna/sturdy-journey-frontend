import React from 'react'
import { Card, CardTitle, CardSubtitle, CardText, CardBody, Row, Col } from 'reactstrap'
import RoleIcon from '../RoleIcon'

const UserCard = ({ card, onClickNext, onClickPrev }) => {
  return (
    <div>
      <Card className='basicCard'>
        <Row>
          <Col className='text-left'>
            <button onClick={onClickPrev}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
          </Col>
          <Col className='text-right'>
            <button onClick={onClickNext}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
          </Col>
        </Row>
        <CardBody >
          <p className='cardSubtitle' style={{ margin: '0px' }}>Player Details</p>
          <CardTitle className='border-bottom cardTitle' style={{ fontSize: '27px' }}><RoleIcon />{card.name}</CardTitle>
          <CardSubtitle className='cardSubtitle'>Objective:</CardSubtitle>
          <CardTitle className='cardText'>{card.description} </CardTitle>
          <CardSubtitle className='cardSubtitle'>Allies:</CardSubtitle>
          <CardText className='cardTextHighlight'>{card.allies.map((ally, index) => index < (card.allies.length - 1) ? ally + ', ' : ally)}</CardText>
          <CardSubtitle className='cardSubtitle'>Tips:</CardSubtitle>
          <CardText className='cardText'>You must aim to blend in amongst the Crew at all cost!</CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default UserCard
