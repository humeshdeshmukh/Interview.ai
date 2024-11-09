import React, { useState, useEffect } from 'react';
import './PersonalDetails.css';

interface PersonalDetailsProps {
  onChange: (details: { name: string; email: string; phone: string; address: string }) => void;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ onChange }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const [errors, setErrors] = useState({ name: '', email: '', phone: '', address: '' });

  // Update parent component when field values change
  useEffect(() => {
    onChange({ name, email, phone, address });
  }, [name, email, phone, address, onChange]);

  // Validation function to check input
  const validateFields = () => {
    setErrors({
      name: name.trim() ? '' : 'Name is required',
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Enter a valid email address',
      phone: /^\d{10}$/.test(phone) ? '' : 'Phone number must be 10 digits',
      address: address.trim() ? '' : 'Address is required',
    });
  };

  return (
    <div className="personal-details bg-[#f9f9f9] p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-8 animate-fadeIn">
      <h2 className="text-2xl font-semibold text-[#457b9d] mb-4">Personal Details</h2>

      <div className="input-group">
        <label htmlFor="name" className="label">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={validateFields}
          placeholder="Enter your full name (required)"
          className="input"
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>

      <div className="input-group">
        <label htmlFor="email" className="label">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateFields}
          placeholder="Enter your email address (e.g., name@example.com)"
          className="input"
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      <div className="input-group">
        <label htmlFor="phone" className="label">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onBlur={validateFields}
          placeholder="Enter your phone number (10 digits)"
          className="input"
        />
        {errors.phone && <p className="error-message">{errors.phone}</p>}
      </div>

      <div className="input-group">
        <label htmlFor="address" className="label">Address:</label>
        <textarea
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          onBlur={validateFields}
          placeholder="Enter your address (required)"
          className="textarea"
        ></textarea>
        {errors.address && <p className="error-message">{errors.address}</p>}
      </div>
    </div>
  );
};

export default PersonalDetails;
