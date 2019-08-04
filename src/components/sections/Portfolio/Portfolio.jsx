import React from 'react';
import { Container } from 'reactstrap';
import SectionHeader from '@atoms/SectionHeader/SectionHeader';
import PortfolioContainer from '@atoms/Portfolio/PortfolioContainer';

const items = [
  { title: 'Title 1', description: 'Description 1' },
  { title: 'Title 2', description: 'Description 2' },
  { title: 'Title 3', description: 'Description 3' },
];
const Portfolio = () => (
  <>
    <Container className="section-container bg-primary">
      <SectionHeader title="My recent works" />
      <PortfolioContainer items={items} />
    </Container>
  </>
);

export default Portfolio;
