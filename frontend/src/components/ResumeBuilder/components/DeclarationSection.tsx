import React, { useState } from 'react';
import './DeclarationSection.css';

const DeclarationSection: React.FC = () => {
  const [declaration, setDeclaration] = useState('');

  const handleDeclarationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDeclaration(e.target.value);
  };

  return (
    <section className="declaration-section">
      <h2>Declaration</h2>
      <textarea
        className="declaration-input"
        placeholder="Enter your declaration statement here..."
        value={declaration}
        onChange={handleDeclarationChange}
      />
    </section>
  );
};

export default DeclarationSection;
