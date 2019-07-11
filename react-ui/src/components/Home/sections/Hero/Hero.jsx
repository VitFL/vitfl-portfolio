import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "reactstrap";
import "./Hero.scss";

const Hero = () => {
  const [
    { headerFirst, headerSecond, slogan, description },
    setHero
  ] = useState({});
  useEffect(() => {
    (async () => {
      const requestBody = {
        query: `
            query {
              fetchHero {
                _id,
                headerFirst,
                headerSecond,
                slogan,
                description
              }
            }
          `
      };

      const { data } = await axios.post(
        "http://localhost:5000/graphql",
        requestBody
      );
      setHero(data.data.fetchHero);
    })();
  });

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
