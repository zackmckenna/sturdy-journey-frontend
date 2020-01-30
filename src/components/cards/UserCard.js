import React from 'react'
import { Card, CardTitle, CardSubtitle, CardText, CardBody, Row, Col } from 'reactstrap'

const UserCard = ({ card, onClickNext, onClickPrev }) => {
  console.log(card)
  return (
    <div>
      <Card>
        <Row>
          <Col className='text-left'>
            <button onClick={onClickPrev}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
          </Col>
          <Col className='text-right'>
            <button onClick={onClickNext}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
          </Col>
        </Row>
        <CardBody >
          <CardTitle><h2>Your Role Card</h2></CardTitle>
          <CardTitle><h4>You Are The {card.name}</h4></CardTitle>
          <CardSubtitle>{card.team}</CardSubtitle>
          <CardText>{card.description}</CardText>
          <CardText className='inline'>Enemies:
            <ul>
              {card.enemies.map((enemy, index) => <li key={index}>{enemy}</li>)}
            </ul>
          </CardText>
          <CardText className='inline'>
            Allies: <ul>{card.allies.map((ally, index) => <li key={index}>{ally}</li>)}</ul>
          </CardText>
          {card.canStop ? <CardText>You can stop game by calling out:</CardText> : <CardText>You can not stop the game.</CardText>}
          {card.canCall ? card.canCall.map(role => <CardText key={role.id}>{role.key}</CardText>) : null}
        </CardBody>
      </Card>
    </div>
  )
}

export default UserCard
