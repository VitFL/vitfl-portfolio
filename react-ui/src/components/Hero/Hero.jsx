import React from 'react';
import {
  Container, Row, Col, Button,
} from 'reactstrap';
import './Hero.scss';

const Hero = () => {

  return (
    <Container
      className="container-hero bg-primary d-flex flex-column justify-content-center"
      fluid
    >
      <Row>
        <Col className="col-xl-8 offset-xl-2 p-0">
          <h5 className="text-monospace text-accent">Hi, my name is</h5>
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-8 offset-xl-2 p-0">
          <h1 className="hero-heading">Vitaliy Tkachuk</h1>
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-8 offset-xl-2 p-0">
          <span className="hero-heading text-light">I build things for the web.</span>
        </Col>
      </Row>
      <Row>
        <Col className="col-12 col-xl-8 offset-xl-2 p-0">
          <Row>
            <Col className="col-6 my-3">
              <p>
                I'm a web developer based in Lviv (Ukraine) specializing in producing high-quality
                responsive websites with exceptional user experience and SEO friendly code.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="col-xl-8 offset-xl-2 p-0">
          <Button color="outline-accent text-uppercase" size="sm">
            Get in touch
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
