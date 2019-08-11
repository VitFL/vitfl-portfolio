import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const MyModal = ({
  isModalOpen, toggleModal, modalHeader, modalBody, ModalFooter,
}) => (
  <Modal isOpen={isModalOpen} toggle={toggleModal}>
    <ModalHeader toggle={toggleModal}>{modalHeader}</ModalHeader>
    <ModalBody>{modalBody}</ModalBody>
    <ModalFooter>{ModalFooter}</ModalFooter>
  </Modal>
);

export default MyModal;
