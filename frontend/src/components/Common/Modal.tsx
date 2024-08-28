import React from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';
import './Modal.css'; // Import custom CSS for additional styling

interface ModalProps {
  show: boolean; // Controls whether the modal is visible
  onHide: () => void; // Function to close the modal
  title?: string; // Optional title for the modal
  children?: React.ReactNode; // Content to be displayed in the modal body
  footerActions?: React.ReactNode; // Optional footer actions
  size?: 'sm' | 'lg' | 'xl'; // Optional size of the modal
}

const Modal: React.FC<ModalProps> = ({
  show,
  onHide,
  title,
  children,
  footerActions,
  size = 'lg',
}) => {
  return (
    <BootstrapModal show={show} onHide={onHide} size={size} aria-labelledby="modal-title" centered>
      {title && <BootstrapModal.Header closeButton>
        <BootstrapModal.Title id="modal-title">{title}</BootstrapModal.Title>
      </BootstrapModal.Header>}
      <BootstrapModal.Body>
        {children}
      </BootstrapModal.Body>
      {footerActions && (
        <BootstrapModal.Footer>
          {footerActions}
        </BootstrapModal.Footer>
      )}
    </BootstrapModal>
  );
};

export default Modal;
