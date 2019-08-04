import React from 'react';
import {
  Container, Row, Col, Button
} from 'reactstrap';
import HeroHeading from './HeroHeading';
import HeroDescription from './HeroDescription';

const Hero = () => {
  return (
    <Container className="section-container bg-primary d-flex flex-column justify-content-center">
        <HeroHeading className="text-monospace text-accent" text="Hi, my name is" minimal />
        <HeroHeading text="Vitaliy Tkachuk" />
        <HeroHeading className="text-light" text="I build things for the web." secondary />
        <HeroDescription text="I'm a web developer based in Lviv (Ukraine) specializing in producing high-quality responsive websites with exceptional user experience and SEO friendly code." />
      <Row>
        <Col className="col-xl-10  p-0">
          <Button color="outline-accent" className="text-uppercase" size="sm">
            Get in touch
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
