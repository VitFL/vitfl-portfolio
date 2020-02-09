import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CodingActivity from '@components/Charts/CodingActivity/CodingActivity';
import LanguagesUsed from '@components/Charts/LanguagesUsed/LanguagesUsed';

const StatsContainer = () => (
  <Container className="mt-3">
    <Row>
      <Col className="col-10 col-xl-6 col-md-10">
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
      <Col className="col-10 col-xl-5 offset-xl-1 col-md-10">
        <LanguagesUsed
          width={400}
          height={300}
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
