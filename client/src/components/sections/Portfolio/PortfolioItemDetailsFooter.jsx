import React from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { github } from 'react-icons-kit/icomoon/github';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  & > * {
    margin-right: 18px;
  }
`;

const formatDate = (dateStr) => {
  const result = new Date(dateStr);
  return result.toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric' });
};

const PortfolioItemDetailsFooter = ({ repo }) => {
  const { html_url, created_at, updated_at } = repo;
  return (
    <>
      <Container>
        <span>{`Created at: ${formatDate(created_at)}`}</span>
        <span>{`Updated at: ${formatDate(updated_at)}`}</span>
      </Container>
      <Container>
        <a
          href={html_url}
          className="btn btn-outline-info"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={github} />
          {' '}
View Repository
        </a>
      </Container>
    </>
  );
};

export default PortfolioItemDetailsFooter;
