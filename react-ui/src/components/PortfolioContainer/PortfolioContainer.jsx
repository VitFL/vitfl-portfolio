import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PortfolioItem from './PortfolioItem';

const PortfolioContainer = () => (
  <Container className="mt-3">
    <Row>
      <Col className="col-4">
        <PortfolioItem />
      </Col>
      <Col className="col-4">
        <PortfolioItem />
      </Col>
      <Col className="col-4">
        <PortfolioItem />
      </Col>
    </Row>
  </Container>
);

export default PortfolioContainer;
