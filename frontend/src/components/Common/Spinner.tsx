import React from 'react';
import { Spinner as BootstrapSpinner } from 'react-bootstrap';
import './Spinner.css'; // Import custom CSS for additional styling

interface SpinnerProps {
  size?: 'sm' | 'lg'; // Optional size of the spinner
  color?: string; // Optional color for the spinner
  animation?: 'border' | 'grow'; // Optional animation type
}

const Spinner: React.FC<SpinnerProps> = ({
  size = 'sm',
  color = '#007bff', // Default Bootstrap blue color
  animation = 'border',
}) => {
  return (
    <BootstrapSpinner
      animation={animation}
      size={size}
      style={{ color }}
      className="custom-spinner"
    />
  );
};

export default Spinner;
