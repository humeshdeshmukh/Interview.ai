import React from 'react';
import { Alert, Toast } from 'react-bootstrap';
import './Notification.css'; // Import custom CSS for additional styling

interface NotificationProps {
  show: boolean; // Controls whether the notification is visible
  onClose: () => void; // Function to close the notification
  title?: string; // Optional title for the notification
  message: string; // Main message to display
  type: 'success' | 'error' | 'info' | 'warning'; // Type of notification
}

const Notification: React.FC<NotificationProps> = ({
  show,
  onClose,
  title,
  message,
  type,
}) => {
  const getAlertVariant = () => {
    switch (type) {
      case 'success':
        return 'success';
      case 'error':
        return 'danger';
      case 'info':
        return 'info';
      case 'warning':
        return 'warning';
      default:
        return 'info';
    }
  };

  return (
    <Toast
      show={show}
      onClose={onClose}
      className={`notification-toast ${getAlertVariant()}`}
    >
      <Toast.Header>
        {title && <strong className="mr-auto">{title}</strong>}
        <button type="button" className="ml-2 mb-1 close" aria-label="Close" onClick={onClose}>
          <span aria-hidden="true">&times;</span>
        </button>
      </Toast.Header>
      <Toast.Body>
        {message}
      </Toast.Body>
    </Toast>
  );
};

export default Notification;
