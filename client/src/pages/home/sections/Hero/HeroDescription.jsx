import React from 'react';
import { Row, Col } from 'reactstrap';

const HeroDescription = ({ text }) => (
  <Row>
    <Col className="col-12 col-xl-10">
      <Row>
        <Col className="col-xl-6 col-md-8 my-3">
          <p>{text}</p>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default HeroDescription;
