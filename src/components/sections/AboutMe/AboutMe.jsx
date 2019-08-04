import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SectionHeader from '@atoms/SectionHeader/SectionHeader';
import List from '@atoms/List/List';
import photo from '@assets/img/profile-photo.jpg';
import './AboutMe.scss';

const listItems = [
  'Responsive HTML/CSS',
  'JavaScript (vanilla, jQuery, React.js and other frameworks)',
  'High-level user experience',
  'Search engine optimization',
  'Performance',
];

const AboutMe = () => {
  return (
    <Container className="container-hero bg-primary">
      <SectionHeader title="About Me" />
      <Row>
        <Col className="col-xl-5 p-0">
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
        <Col className="col-xl-5p-0">
          <img src={photo} className="profile-photo" alt="portrait" />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
