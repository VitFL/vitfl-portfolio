import React from 'react';
import useAxios from 'axios-hooks';
import {
  Container, Row, Col, Button,
} from 'reactstrap';
import './Hero.scss';

const Hero = () => {
  const [{ response, loading, error }, refetch] = useAxios('http://localhost:4000/hero/');
  const [{
    headerFirst, headerSecond, slogan, description,
  }] = !loading ? response.data : [{}];
  return (
    <Container className="container-hero bg-primary d-flex flex-column justify-content-center">
      <Row>
        <Col className="col-xl-10 p-0">
          <h5 className="text-monospace text-accent">{headerFirst}</h5>
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-10 p-0">
          <h1 className="hero-heading">{headerSecond}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-10 p-0">
          <span className="hero-heading text-light">{slogan}</span>
        </Col>
      </Row>
      <Row>
        <Col className="col-12 col-xl-10 p-0">
          <Row>
            <Col className="col-6 my-3">
              <p>{description}</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-10  p-0">
          <Button color="outline-accent text-uppercase" size="sm">
            Get in touch
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
