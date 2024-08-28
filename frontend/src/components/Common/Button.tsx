import React from 'react';
import { Button as BootstrapButton, ButtonProps as BootstrapButtonProps } from 'react-bootstrap';
import './Button.css'; // Import custom CSS for additional styling

interface ButtonProps extends BootstrapButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'; // Bootstrap variants
  size?: 'sm' | 'lg'; // Button sizes
  isLoading?: boolean; // Custom prop to show loading state
  icon?: React.ReactNode; // Optional icon prop
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size,
  isLoading = false,
  icon,
  children,
  ...props
}) => {
  return (
    <BootstrapButton
      variant={variant}
      size={size}
      className={`custom-button ${isLoading ? 'loading' : ''}`}
      {...props}
    >
      {isLoading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />}
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </BootstrapButton>
  );
};

export default Button;
