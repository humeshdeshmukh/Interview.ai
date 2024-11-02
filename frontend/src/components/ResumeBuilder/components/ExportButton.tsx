import React from 'react';
import './ExportButton.css';

interface ExportButtonProps {
  onExport: () => void; // Function to handle export action
}

const ExportButton: React.FC<ExportButtonProps> = ({ onExport }) => {
  return (
    <button className="export-button" onClick={onExport}>
      Export Resume
    </button>
  );
};

export default ExportButton;
