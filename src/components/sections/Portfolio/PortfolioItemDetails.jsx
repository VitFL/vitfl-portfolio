import React from 'react';
import MyModal from '@atoms/Modal/Modal';

const PortfolioItemDetails = ({
  isDetailsOpen, toggleDetails, repo, repoContents,
}) => {
  const { title: detailsTitle } = repo;
  const { description: detailsBody } = repoContents;
  const detailsFooter = '<h1>Footer</h1>';
  return (
    <MyModal
      isModalOpen={isDetailsOpen}
      toggleModal={toggleDetails}
      modalHeader={detailsTitle}
      modalBody={detailsBody}
      ModalFooter={detailsFooter}
    />
  );
};

export default PortfolioItemDetails;
