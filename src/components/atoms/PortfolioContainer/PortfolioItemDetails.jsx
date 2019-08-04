import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_close } from 'react-icons-kit/md/ic_close';
import styled from 'styled-components';

const StyledIcon = styled(Icon)`
  width: 30px;
  height: 30px;
  color: #fff;
  &:svg {
    width: 100%;
    height: 100%;
  }
`;

const PortfolioItemDetails = ({ isDetailsOpen, toggleDetails }) => (
  <div className={`portfolio-details ${isDetailsOpen || 'portfolio-details--open'} `}>
    <StyledIcon icon={ic_close} size="100%" className="close" onClick={toggleDetails} />
  </div>
);

export default PortfolioItemDetails;
