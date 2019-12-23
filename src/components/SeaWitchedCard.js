import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import SeaWitchedColorLogo from './SeaWitchedLogoColor'

const Example = (props) => {
  return (
    <div>
      <Card className='col-6-sm'>
        <CardBody style={{backgroundColor: '#322931'}}>
        <SeaWitchedColorLogo />
          <CardTitle className='text-danger'>Card title</CardTitle>
          <CardSubtitle className='text-danger'>Card subtitle</CardSubtitle>
          <CardText className='text-danger'>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
