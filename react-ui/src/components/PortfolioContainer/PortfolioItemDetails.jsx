import React from 'react';
import IosClose from 'react-ionicons/lib/IosClose';

const PortfolioItemDetails = ({ isDetailsOpen, toggleDetails }) => (
  <div className={`portfolio-details ${isDetailsOpen || 'portfolio-details--open'} `}>
    <IosClose className="close" fontSize="25px" color="#fff" onClick={toggleDetails} />
  </div>
);

export default PortfolioItemDetails;
