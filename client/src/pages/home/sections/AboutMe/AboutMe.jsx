import React from 'react';
import { Row, Col } from 'reactstrap';
import Cube from '@components/Cube/Cube';
import Section from '@components/Section/Section';
import SectionHeader from '@components/Section/SectionHeader';
import List from '@components/List/List';
import jsLogo from '@assets/img/tech-logos/js.png';
import cssLogo from '@assets/img/tech-logos/css3.png';
import htmlLogo from '@assets/img/tech-logos/html5_flipped.png';
import reactLogo from '@assets/img/tech-logos/react.png';
import bootstrapLogo from '@assets/img/tech-logos/bootstrap_flipped.png';

import styled from "styled-components";

const listItems = [
  'Responsive HTML/CSS',
  'JavaScript (vanilla, jQuery, React.js and other frameworks)',
  'High-level user experience',
  'Search engine optimization',
  'Performance',
];

const AboutMe = () => (
  <Section id="about">
    <SectionHeader title="About Me" />
    <Row>
      <Col className="col-xl-6 col-md-12 col-12">
        <p>
          I am a web developer based in Lviv (Ukraine) who enjoys building responsive websites and
          web-applications, that allow the user to experience website in the best and most
          appropriate way suited to the device they are using. The main area of my expertise is
          front end development (client side of the web), however I also have experience in
          back-end development (PHP, Yii2 Framework, WordPress) and Search Engine Optimization.
        </p>
        <p>Clients often approach me when they need a developer who can provide:</p>
        <List items={listItems} />
      </Col>
      <Col className="col-xl-6 col-md-12 col-12">
        <Cube front={jsLogo} top={htmlLogo} left={cssLogo} right={bootstrapLogo} bottom={reactLogo} />
      </Col>
    </Row>
  </Section>
);

export default AboutMe;
