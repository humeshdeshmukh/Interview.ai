import React, { useState } from 'react';
import './DeclarationSection.css';
import { FaSave, FaEdit, FaPlus, FaClipboardList } from 'react-icons/fa'; // Importing icons

const predefinedDeclarations = [
  "I hereby declare that all the information provided is true and accurate to the best of my knowledge.",
  "I confirm that the details mentioned in this document are correct and I take full responsibility for them.",
  "I hereby declare that the information provided is accurate and complete to the best of my knowledge and belief.",
  "I confirm that the information provided is correct and reflects my true and current status.",
  "I declare that the information given is accurate to the best of my knowledge and belief."
];

const DeclarationSection: React.FC = () => {
  const [declaration, setDeclaration] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleDeclarationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDeclaration(e.target.value);
  };

  const handleSave = () => {
    alert('Declaration saved!');
  };

  const handleClear = () => {
    setDeclaration('');
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSelectPredefinedDeclaration = (declarationText: string) => {
    setDeclaration(declarationText);
  };

  return (
    <section className="declaration-section">
      <h2>Declaration</h2>

      <div className="declaration-header">
        <button className="edit-toggle" onClick={handleEditToggle}>
          <FaEdit /> {isEditing ? 'Stop Editing' : 'Edit Declaration'}
        </button>
      </div>

      {isEditing ? (
        <div className="declaration-input-container">
          <textarea
            className="declaration-input"
            placeholder="Type your declaration here..."
            value={declaration}
            onChange={handleDeclarationChange}
          />
          <div className="declaration-footer">
            <button className="save-declaration" onClick={handleSave}>
              <FaSave /> Save
            </button>
            <button className="clear-declaration" onClick={handleClear}>
              <FaPlus /> Clear
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="declaration-display">{declaration || 'No declaration provided.'}</p>

          <div className="predefined-declarations">
            <h4>Select a Predefined Declaration</h4>
            <ul>
              {predefinedDeclarations.map((declarationText, index) => (
                <li key={index}>
                  <button 
                    className="predefined-declaration-button" 
                    onClick={() => handleSelectPredefinedDeclaration(declarationText)}>
                    <FaClipboardList /> {declarationText}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default DeclarationSection;
