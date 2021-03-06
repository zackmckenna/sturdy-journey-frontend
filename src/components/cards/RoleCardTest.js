import React from 'react'
import { Card, CardTitle, CardSubtitle, CardBody, Row, Col } from 'reactstrap'

const RoleCardTest = ({ role, onClickNext, onClickPrev }) => {

  return (
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
        <CardTitle className='text-center handle'>DRAG ME</CardTitle>
        <CardTitle ><h2>{role.name}</h2></CardTitle>
        <CardTitle><h4>{role.description}</h4></CardTitle>
        <CardSubtitle>{role.team}</CardSubtitle>
      </CardBody>
    </Card>
  )
}

export default RoleCardTest
