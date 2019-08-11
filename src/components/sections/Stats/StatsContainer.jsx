import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CodingActivity from '@atoms/Charts/CodingActivity/CodingActivity';
import LanguagesUsed from '@atoms/Charts/LanguagesUsed/LanguagesUsed';

const StatsContainer = () => (
  <Container className="mt-3">
    <Row>
      <Col className="col-6">
        <CodingActivity
          width={400}
          height={300}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Time spent coding',
            },
            legend: { display: false },
          }}
        />
      </Col>
      <Col className="col-5 offset-1">
        <LanguagesUsed
          width={300}
          height={200}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: 'Languages used in last 30 days',
            },
            legend: { position: 'right', labels: { boxWidth: 12 } },
          }}
        />
      </Col>
    </Row>
  </Container>
);

export default StatsContainer;
