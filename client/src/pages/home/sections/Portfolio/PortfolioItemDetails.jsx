import React from 'react';
import * as githubUtils from '@utils/github';
import MyModal from '@components/Modal/Modal';
import ReactMarkdown from 'react-markdown';
import PortfolioItemDetailsFooter from './PortfolioItemDetailsFooter';

const PortfolioItemDetails = ({
  isDetailsOpen, toggleDetails, repo, repoContents,
}) => {
  const { name: repoTitle } = repo;
  const detailsFooter = <PortfolioItemDetailsFooter repo={repo} toggleModal={toggleDetails} />;
  const modalBody = repoContents ? (
    <ReactMarkdown source={repoContents} escapeHtml={false} />
  ) : (
      'Loading'
    );
  return (
    <MyModal
      isModalOpen={isDetailsOpen}
      toggleModal={toggleDetails}
      modalHeader={githubUtils.nameBeautify(repoTitle)}
      modalBody={modalBody}
      modalFooter={detailsFooter}
      options={{ size: 'lg' }}
    />
  );
};

export default PortfolioItemDetails;
