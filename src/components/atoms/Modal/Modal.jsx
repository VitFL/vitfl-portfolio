import React from 'react';
import {
  Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import styled from 'styled-components';

const StyledModal = styled(Modal)`
  color: var(--primary);
`;

const MyModal = ({
  isModalOpen, toggleModal, modalHeader, modalBody, modalFooter,
}) => (
  <StyledModal isOpen={isModalOpen} toggle={toggleModal}>
    <ModalHeader toggle={toggleModal}>{modalHeader}</ModalHeader>
    <ModalBody>{modalBody}</ModalBody>
    <ModalFooter>{modalFooter}</ModalFooter>
  </StyledModal>
);

export default MyModal;
