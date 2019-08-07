import React from "react";
import { Container, Row, Col } from "reactstrap";
import CodingActivity from "@atoms/Charts/CodingActivity/CodingActivity";
import LanguagesUsed from "@atoms/Charts/LanguagesUsed/LanguagesUsed";

const StatsContainer = () => (
  <Container className="mt-3">
    <Row>
      <Col className="col-4">
        <CodingActivity
          width={400}
          height={300}
          options={{
            maintainAspectRatio: false,
            legend: { labels: { boxWidth: 12 } }
          }}
        />
      </Col>
      <Col className="col-4">
        <LanguagesUsed
          width={200}
          height={100}
          options={{
            maintainAspectRatio: false,
            legend: { position: "right", labels: { boxWidth: 12 } }
          }}
        />
      </Col>
      <Col className="col-4" />
    </Row>
  </Container>
);

export default StatsContainer;
