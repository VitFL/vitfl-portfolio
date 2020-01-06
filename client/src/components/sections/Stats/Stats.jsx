import React from 'react';
import Section from '@atoms/Section/Section';
import SectionHeader from '@atoms/Section/SectionHeader';
import StatsContainer from '@sections/Stats/StatsContainer';

const Stats = () => (
  <Section id="stats">
    <SectionHeader title="My activity stats" />
    <StatsContainer />
  </Section>
);

export default Stats;
