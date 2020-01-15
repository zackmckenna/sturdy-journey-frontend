import React, { useState } from 'react'
import { Card, CardTitle, CardSubtitle, CardBody, Row, Col } from 'reactstrap'
import ReactCardFlip from 'react-card-flip'

const TopDeckCard = ({ onClickNext }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const handleFlip = (e) => {
    setIsFlipped(!isFlipped)
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
      <Card key='front' onClick={(e) => handleFlip(e)}>
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
      <div key='back' onClick={(e) => handleFlip(e)}>
        <Card>
          <CardBody>
            Test Test test
            <CardTitle>
              TEST TEST
            </CardTitle>
            <CardSubtitle>
              TEST TEST TEST
            </CardSubtitle>
          </CardBody>
        </Card>
      </div>
    </ReactCardFlip>
  )
}

export default TopDeckCard
