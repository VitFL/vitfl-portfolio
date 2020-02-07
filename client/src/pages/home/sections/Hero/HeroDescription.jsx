import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';

const StyledP = styled.p`
  @media (max-width: 767px) {
    font-size: 0.9rem;
  }
`;

const HeroDescription = ({ text }) => (
  <Row>
    <Col className="col-12 col-xl-10">
      <Row>
        <Col className="col-xl-6 col-md-8 my-3">
          <StyledP>{text}</StyledP>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default HeroDescription;
