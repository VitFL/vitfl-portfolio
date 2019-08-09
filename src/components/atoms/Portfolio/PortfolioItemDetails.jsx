import React from "react";
import { Button } from "reactstrap";
import MyModal from "@atoms/Modal/Modal";

const PortfolioItemDetails = ({ isDetailsOpen, toggleDetails }) => (
  <MyModal
    isModalOpen={isDetailsOpen}
    toggleModal={toggleDetails}
    modalHeader={detailsTitle}
    modalBody={detailsBody}
    ModalFooter={detailsFooter}
  />
);

export default PortfolioItemDetails;
