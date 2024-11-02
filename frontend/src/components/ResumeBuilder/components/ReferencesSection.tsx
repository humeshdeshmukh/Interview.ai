import React, { useState } from 'react';
import './ReferencesSection.css';

interface Reference {
  name: string;
  relationship: string;
  contact: string;
}

const ReferencesSection: React.FC = () => {
  const [references, setReferences] = useState<Reference[]>([]);
  const [newReference, setNewReference] = useState<Reference>({ name: '', relationship: '', contact: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewReference({ ...newReference, [name]: value });
  };

  const addReference = () => {
    if (newReference.name && newReference.relationship && newReference.contact) {
      setReferences([...references, newReference]);
      setNewReference({ name: '', relationship: '', contact: '' }); // Reset input fields
    }
  };

  return (
    <div className="references-section">
      <h2>References</h2>
      <div className="reference-input">
        <input
          type="text"
          name="name"
          placeholder="Reference Name"
          value={newReference.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="relationship"
          placeholder="Relationship"
          value={newReference.relationship}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Information"
          value={newReference.contact}
          onChange={handleChange}
        />
        <button onClick={addReference} className="add-reference-button">Add Reference</button>
      </div>
      <ul className="references-list">
        {references.map((reference, index) => (
          <li key={index} className="reference-item">
            <h3>{reference.name}</h3>
            <p>Relationship: {reference.relationship}</p>
            <p>Contact: {reference.contact}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReferencesSection;
