// TODO:
// https://github.com/chartjs/Chart.js

import React from 'react';
import { Container } from 'reactstrap';
import SectionHeader from '@atoms/SectionHeader/SectionHeader';
import StatsContainer from '@sections/Stats/StatsContainer';

const Stats = () => {
  return (
    <>
      <Container className="section-container bg-primary">
        <SectionHeader title="My activity stats" />
        <StatsContainer />
      </Container>
    </>
  );
};

export default Stats;
