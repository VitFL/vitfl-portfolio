import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CodingActivity from '@atoms/Charts/CodingActivity/CodingActivity';

const StatsContainer = () => (
  <Container className="mt-3">
    <Row>
      <Col className="col-4">
        <CodingActivity
          width={300}
          height={200}
          options={{ maintainAspectRatio: false, legend: { display: false } }}
        />
      </Col>
      <Col className="col-4" />
      <Col className="col-4" />
    </Row>
  </Container>
);

export default StatsContainer;
