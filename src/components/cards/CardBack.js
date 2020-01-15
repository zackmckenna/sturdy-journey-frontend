import React from 'react'
import { Card, CardBody, Row, Col } from 'reactstrap'

const CardBack = ({ card, onClickNext, onClickPrev }) => {
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
          CARD BACK
        </CardBody>
      </Card>
    </div>
  )
}

export default CardBack
