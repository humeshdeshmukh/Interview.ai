import React, { useState } from 'react';
import './PersonalDetails.css';

interface PersonalDetailsProps {
  onChange: (details: { name: string; email: string; phone: string; address: string }) => void;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({ onChange }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleInputChange = () => {
    onChange({ name, email, phone, address });
  };

  return (
    <div className="personal-details">
      <h2>Personal Details</h2>
      <div className="input-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            handleInputChange();
          }}
          placeholder="Enter your full name"
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            handleInputChange();
          }}
          placeholder="Enter your email address"
        />
      </div>
      <div className="input-group">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            handleInputChange();
          }}
          placeholder="Enter your phone number"
        />
      </div>
      <div className="input-group">
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            handleInputChange();
          }}
          placeholder="Enter your address"
        ></textarea>
      </div>
    </div>
  );
};

export default PersonalDetails;
