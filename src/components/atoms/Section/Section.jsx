import React from 'react';
import { Container } from 'reactstrap';

const Section = props => (
  <Container id={props.id} className="my-4 py-4 bg-primary">
    {props.children}
  </Container>
);

export default Section;
