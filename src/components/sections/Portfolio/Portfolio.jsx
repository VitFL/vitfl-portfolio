import React from 'react';
import { Container } from 'reactstrap';
import SectionHeader from '@atoms/SectionHeader/SectionHeader';
import useGithubRepos from '@hooks/github/useGithubRepos';
import PortfolioContainer from './PortfolioContainer';

const Portfolio = () => {
  const reposList = useGithubRepos('VitFL', 'portfolio');
  return (
    <>
      <Container className="section-container bg-primary">
        <SectionHeader title="My recent works" />
        <PortfolioContainer reposList={reposList} />
      </Container>
    </>
  );
};

export default Portfolio;
