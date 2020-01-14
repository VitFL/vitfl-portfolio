import React from 'react';
import Section from '@components/Section/Section';
import SectionHeader from '@components/Section/SectionHeader';
import StatsContainer from './StatsContainer';

const Stats = () => (
  <Section id="stats">
    <SectionHeader title="My activity stats" />
    <StatsContainer />
  </Section>
);

export default Stats;
