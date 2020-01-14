import React from 'react';
import { Row, Col } from 'reactstrap';

const headingStyles = {
  fontSize: '4.4rem',
  fontWeight: '800',
  lineHeight: '1.1',
  margin: '0 0 10px 0',
};

const HeroHeading = ({
  className, text, minimal, secondary,
}) => {
  const heading = minimal ? (
    <h5 className={className}>{text}</h5>
  ) : secondary ? (
    <span style={headingStyles} className={className}>
      {text}
    </span>
  ) : (
    <h1 style={headingStyles} className={className}>
      {text}
    </h1>
  );

  return (
    <Row>
      <Col className="col-xl-10 p-0">{heading}</Col>
    </Row>
  );
};

export default HeroHeading;
