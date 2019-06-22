import React from 'react';
import { Container } from 'reactstrap';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import PortfolioContainer from '../../components/PortfolioContainer/PortfolioContainer';
const items = [
  { title: "Title 1", description: "Description 1"},
  { title: "Title 2", description: "Description 2"},
  { title: "Title 3", description: "Description 3"}
];
const Portfolio = () => (
  <>
  <Container className="bg-primary">
    <SectionHeader title="My recent works" />
  </Container>
  <PortfolioContainer items={ items }/>
  </>
);

export default Portfolio;
