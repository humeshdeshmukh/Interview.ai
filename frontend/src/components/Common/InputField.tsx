import React from 'react';
import { Form } from 'react-bootstrap';
import './InputField.css'; // Import custom CSS if needed

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; // Optional label for the input field
  error?: string; // Optional error message
  helperText?: string; // Optional helper text
  isInvalid?: boolean; // Flag to indicate if the input is invalid
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  helperText,
  isInvalid = false,
  ...props
}) => {
  return (
    <Form.Group className="mb-3">
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        isInvalid={isInvalid}
        {...props}
        className={`custom-input ${isInvalid ? 'is-invalid' : ''}`}
      />
      {helperText && <Form.Text className="text-muted">{helperText}</Form.Text>}
      {error && <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>}
    </Form.Group>
  );
};

export default InputField;
