import React from 'react'
import { Card, CardTitle, CardSubtitle, CardBody, Row, Col } from 'reactstrap'
import Rules from '../Rules'

const RuleCard = ({ onClickNext, onClickPrev }) => {

  return (
    <Card className='basicCard'>
      <Row>
        <Col className='text-left'>
          <button onClick={onClickPrev}><i className="fa fa-arrow-left" aria-hidden="true"></i></button>
        </Col>
        {onClickNext ?  <Col className='text-right'>
          <button onClick={onClickNext}><i className="fa fa-arrow-right" aria-hidden="true"></i></button>
        </Col> : null}
      </Row>
      <CardBody >
        <Rules />
      </CardBody>
    </Card>
  )
}

export default RuleCard
