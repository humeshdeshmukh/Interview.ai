import React, { useState } from 'react';
import './ReferencesSection.css';
import { FaSave, FaEdit, FaTrashAlt, FaPlusCircle, FaRegEdit } from 'react-icons/fa'; // Importing icons

interface Reference {
  name: string;
  relationship: string;
  contact: string;
}

const ReferencesSection: React.FC = () => {
  const [references, setReferences] = useState<Reference[]>([]);
  const [newReference, setNewReference] = useState<Reference>({ name: '', relationship: '', contact: '' });
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewReference({ ...newReference, [name]: value });
  };

  const addReference = () => {
    if (newReference.name && newReference.relationship && newReference.contact) {
      if (editingIndex !== null) {
        // Edit reference
        const updatedReferences = [...references];
        updatedReferences[editingIndex] = newReference;
        setReferences(updatedReferences);
        setEditingIndex(null);
      } else {
        // Add new reference
        setReferences([...references, newReference]);
      }
      setNewReference({ name: '', relationship: '', contact: '' }); // Reset input fields
    }
  };

  const editReference = (index: number) => {
    setNewReference(references[index]);
    setEditingIndex(index);
  };

  const deleteReference = (index: number) => {
    const updatedReferences = references.filter((_, i) => i !== index);
    setReferences(updatedReferences);
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
        <button onClick={addReference} className="add-reference-button">
          {editingIndex !== null ? <FaSave /> : <FaPlusCircle />} {editingIndex !== null ? 'Save' : 'Add Reference'}
        </button>
      </div>
      <ul className="references-list">
        {references.map((reference, index) => (
          <li key={index} className="reference-item">
            <h3>{reference.name}</h3>
            <p>Relationship: {reference.relationship}</p>
            <p>Contact: {reference.contact}</p>
            <div className="reference-actions">
              <button onClick={() => editReference(index)} className="edit-button">
                <FaRegEdit /> Edit
              </button>
              <button onClick={() => deleteReference(index)} className="delete-button">
                <FaTrashAlt /> Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReferencesSection;
