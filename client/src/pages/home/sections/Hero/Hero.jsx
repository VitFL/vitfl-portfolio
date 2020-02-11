import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import styled from "styled-components";
import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";

const StyledContainer = styled(Container)`
  min-height: calc(100vh - 4rem);
`;

const StyledButton = styled(Button)`
    @media (max-width: 992px) {
      padding: 0.2rem 0.4rem !important;
      font-size: 0.845rem !important;
      line-height: 1.4 !important;
    }
    @media (max-width: 768px) {
      padding: 0.2rem 0.4rem !important;
      font-size: 0.785rem !important;
      line-height: 1.4 !important;
    }
    @media (max-width: 576px) {
      padding: 0.2rem 0.4rem !important;
      font-size: 0.745rem !important;
      line-height: 1.4 !important;
      border-radius: 0.2rem !important;
    }
`;

const Hero = () => {
  return (
    <StyledContainer className="bg-primary d-flex flex-column justify-content-center">
      <HeroHeading
        className="text-monospace text-accent"
        text="Hi, my name is"
        minimal
      />
      <HeroHeading text="Vitaliy Tkachuk" />
      <HeroHeading
        className="text-light"
        text="I build things for the web."
        secondary
      />
      <HeroDescription text="I'm a web developer based in Lviv (Ukraine) specializing in producing high-quality responsive websites with exceptional user experience and SEO friendly code." />
      <Row>
        <Col className="col-xl-10">
          <StyledButton color="outline-accent" className="text-uppercase" size="sm" href="#contact">
            Get in touch
          </StyledButton>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Hero;
