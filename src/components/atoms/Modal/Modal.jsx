import React from 'react';
import {
  Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import styled from 'styled-components';

const StyledModal = styled(Modal)`
  .modal-content {
    background-color: var(--primary);
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.5), 0 8px 20px 0 rgba(0, 0, 0, 0.24);
    .modal-header {
      border-bottom: 1px solid var(--gray-dark);
    }
    .modal-footer {
      border-top: 1px solid var(--gray-dark);
      justify-content: space-between;
    }
  }
`;

const MyModal = ({
  isModalOpen, toggleModal, modalHeader, modalBody, modalFooter, options,
}) => (
  <StyledModal isOpen={isModalOpen} toggle={toggleModal} {...options}>
    <ModalHeader toggle={toggleModal}>{modalHeader}</ModalHeader>
    <ModalBody>{modalBody}</ModalBody>
    <ModalFooter>{modalFooter}</ModalFooter>
  </StyledModal>
);

export default MyModal;
