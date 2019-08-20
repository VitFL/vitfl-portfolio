import React from 'react';
import {
  Container, Row, Col, Button
} from 'reactstrap';
import styled from 'styled-components';
import HeroHeading from './HeroHeading';
import HeroDescription from './HeroDescription';
import { useAlert } from '@atoms/Alert/AlertProvider';

const StyledContainer = styled(Container)`
min-height: calc(100vh - 4rem);
`;
const Hero = () => {
  const { createAlert } = useAlert();
  const onClickHandler = () => {
    createAlert({color: "info", text: "Hello World!!!!", timeout: 5000});
  }
  return (
    <StyledContainer className="bg-primary d-flex flex-column justify-content-center">
        <HeroHeading className="text-monospace text-accent" text="Hi, my name is" minimal />
        <HeroHeading text="Vitaliy Tkachuk" />
        <HeroHeading className="text-light" text="I build things for the web." secondary />
        <HeroDescription text="I'm a web developer based in Lviv (Ukraine) specializing in producing high-quality responsive websites with exceptional user experience and SEO friendly code." />
      <Row>
        <Col className="col-xl-10  p-0">
          <Button color="outline-accent" className="text-uppercase" onClick={onClickHandler} size="sm">
            Get in touch
          </Button>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Hero;
