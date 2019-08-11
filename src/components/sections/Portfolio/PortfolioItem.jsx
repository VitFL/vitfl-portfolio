import React, { useState } from 'react';
import { Button } from 'reactstrap';
import PortfolioItemDetails from './PortfolioItemDetails';
import './PortfolioContainer.scss';
import photobookimg from '@assets/img/portfolio/photobook.png';

const PortfolioItem = ({ repo, repoContents }) => {
  const { name, description } = repo;
  const [isDetailsOpen, setDetailsOpen] = useState(false);
  const toggleDetails = () => setDetailsOpen(!isDetailsOpen);
  return (
    <div className="portfolio-card">
      <img className="portfolio-image" src={photobookimg} alt="" />
      <h5 className="portfolio-heading">{name}</h5>
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
