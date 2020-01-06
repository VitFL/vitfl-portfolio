import React from 'react';
import Section from '@atoms/Section/Section';
import SectionHeader from '@atoms/Section/SectionHeader';
import useGithubRepos from '@hooks/github/useGithubRepos';
import PortfolioContainer from './PortfolioContainer';

const Portfolio = () => {
  const reposList = useGithubRepos('VitFL', 'portfolio');
  return (
    <Section id="work">
      <SectionHeader title="My recent works" />
      <PortfolioContainer reposList={reposList} />
    </Section>
  );
};

export default Portfolio;
