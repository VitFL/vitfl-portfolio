import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import useGithubRepoContents from '@hooks/github/useGithubRepoContents';
import PortfolioItem from './PortfolioItem';

const PortfolioContainer = ({ reposList }) => {
  const PortfolioItems = reposList
    ? reposList.map((repo, index) => {
      const repoContents = useGithubRepoContents(repo, 'README.md');
      return (
        <Col key={index} className="col-4 mb-4 d-flex align-items-stretch">
          <PortfolioItem repo={repo} repoContents={repoContents} />
        </Col>
      );
    })
    : null;

  return (
    <Container className="mt-3">
      <Row>{PortfolioItems}</Row>
    </Container>
  );
};

export default PortfolioContainer;
