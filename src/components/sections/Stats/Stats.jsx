import React from 'react';
import { Container } from 'reactstrap';
import SectionHeader from '@atoms/SectionHeader/SectionHeader';
import StatsContainer from '@sections/Stats/StatsContainer';

const Stats = () => (
  <>
    <Container className="section-container bg-primary">
      <SectionHeader title="My activity stats" />
      <StatsContainer />
    </Container>
  </>
);

export default Stats;
