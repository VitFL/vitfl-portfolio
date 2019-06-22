import React, { useState } from 'react';
import { Button } from 'reactstrap';
import PortfolioItemDetails from './PortfolioItemDetails';
import './PortfolioContainer.scss';
import photobookimg from '../../assets/img/portfolio/photobook.png';

const PortfolioItem = () => {
  const [isDetailsOpen, setDetailsOpen] = useState(true);
  const toggleDetails = () => setDetailsOpen(!isDetailsOpen);
  return (
    <div className="portfolio-card">
      <img className="portfolio-image" src={photobookimg} alt="" />
      <h5 className="portfolio-heading">Landing Page</h5>
      <p className="portfolio-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, pariatur!
      </p>
      <Button
        className="portfolio-button"
        color="outline-accent text-uppercase"
        size="sm"
        onClick={toggleDetails}
      >
        More info
      </Button>
      <PortfolioItemDetails isDetailsOpen={isDetailsOpen} toggleDetails={toggleDetails} />
    </div>
  );
};

export default PortfolioItem;
