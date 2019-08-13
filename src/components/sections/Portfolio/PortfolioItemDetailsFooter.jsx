import React from 'react';
import { Button } from 'reactstrap';
import { Icon } from 'react-icons-kit';
import { github } from 'react-icons-kit/icomoon/github';

const PortfolioItemDetailsFooter = ({ repo, toggleModal }) => {
  const { html_url } = repo;
  return (
    <>
      <a href={html_url} className="btn btn-info" target="_blank" rel="noopener noreferrer">
        <Icon icon={github} />
        {' '}
View Repository
      </a>
      <Button color="secondary" onClick={toggleModal}>
        Close
      </Button>
    </>
  );
};

export default PortfolioItemDetailsFooter;
