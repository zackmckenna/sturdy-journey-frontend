import React, { useState } from 'react'
import { Button, Card, CardTitle, CardSubtitle, CardBody, Row, Col } from 'reactstrap'
import ReactCardFlip from 'react-card-flip'

const RoleCard = ({ card, onClickNext, onClickPrev }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const handleFlip = (e) => {
    setIsFlipped(!isFlipped)
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
      <Card className='ml-2 mr-2'>
        <Row>
          <Col className='text-left'>
            <button onClick={onClickPrev}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
          </Col>
          <Col className='text-right'>
            <button onClick={onClickNext}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
          </Col>
        </Row>
        <CardBody >
          <CardTitle className='text-center handle'>DRAG ME</CardTitle>
          <CardTitle ><h2>{card.name}</h2></CardTitle>
          <CardTitle><h4>{card.description}</h4></CardTitle>
          <CardSubtitle>{card.team}</CardSubtitle>
          <Button onClick={() => handleFlip()}>FLIP CARD</Button>
        </CardBody>
      </Card>
      <Card >
        <Row>
          <Col className='text-left'>
            <button onClick={onClickPrev}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
          </Col>
          <Col className='text-right'>
            <button onClick={onClickNext}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
          </Col>
        </Row>
        <CardBody onClick={() => handleFlip()}>
          Test test test
          <CardTitle>
              TEST TEST
          </CardTitle>
          <CardSubtitle>
            TEST TEST TEST
          </CardSubtitle>
        </CardBody>
      </Card>
    </ReactCardFlip>
  )
}

export default RoleCard
