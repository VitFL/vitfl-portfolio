import React, { useState } from 'react';
import { Button } from 'reactstrap';
import * as githubUtils from '@utils/github';
import PortfolioItemDetails from './PortfolioItemDetails';
import './PortfolioContainer.scss';

const PortfolioItem = ({ repo, repoContents }) => {
  const { full_name, name, description } = repo;
  const [isDetailsOpen, setDetailsOpen] = useState(false);
  const toggleDetails = () => setDetailsOpen(!isDetailsOpen);
  return (
    <div className="portfolio-card">
      <img
        className="portfolio-image"
        src={`https://raw.githubusercontent.com/${full_name}/master/screenshot-small.png`}
        alt=""
      />
      <h5 className="portfolio-heading">{githubUtils.nameBeautify(name)}</h5>
      <p className="portfolio-description">{description}</p>
      <Button
        className="portfolio-button"
        color="outline-accent text-uppercase"
        size="sm"
        onClick={toggleDetails}
      >

        More info
      </Button>
      <PortfolioItemDetails
        isDetailsOpen={isDetailsOpen}
        toggleDetails={toggleDetails}
        repo={repo}
        repoContents={repoContents}
      />
    </div>
  );
};

export default PortfolioItem;
