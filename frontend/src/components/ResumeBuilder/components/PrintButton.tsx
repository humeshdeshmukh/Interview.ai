import React from 'react';
import './PrintButton.css';

const PrintButton: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button className="print-button" onClick={handlePrint}>
      Print Resume
    </button>
  );
};

export default PrintButton;
