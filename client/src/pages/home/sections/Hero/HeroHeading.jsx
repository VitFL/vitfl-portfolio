import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';

const header = `
  font-size: 4.4rem;
  font-weight: 800;
  line-height: 1.1;
  margin: 0px 0px 10px;
  @media (max-width: 992px) {
    font-size: 3.4rem;
  }
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
  @media (max-width: 576px) {
    font-size: 1.8rem;
  }
`;

const HeadingMinimal = styled.h5`
  @media (max-width: 992px) {
    font-size: 1.15rem;
  }
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
  @media (max-width: 576px) {
    font-size: 0.85rem;
  }
`;

const HeadingMain = styled.h1`
  ${header}
`;

const HeadingSecondary = styled.span`
  ${header}
`;

const HeroHeading = ({
  className, text, minimal, secondary,
}) => {
  const heading = minimal ? (
    <HeadingMinimal className={className}>{text}</HeadingMinimal>
  ) : secondary ? (
    <HeadingSecondary className={className}>
      {text}
    </HeadingSecondary>
  ) : (
        <HeadingMain className={className}>
          {text}
        </HeadingMain>
      );

  return (
    <Row>
      <Col className="col-xl-10">{heading}</Col>
    </Row>
  );
};

export default HeroHeading;
