import React, { useState } from 'react';
import './SummarySection.css';
import { FaSave, FaEdit, FaPlus, FaClipboardList, FaCopy } from 'react-icons/fa'; // Importing icons

interface SummarySectionProps {
  summary: string;
  onSummaryChange: (summary: string) => void;
}

const predefinedSummaries = [
  "Experienced Developer with expertise in front-end technologies and a passion for user experience.",
  "Software Engineer seeking new opportunities in web development and AI technologies.",
  "Recent Graduate with a degree in Computer Science and a strong foundation in web development.",
  "Creative professional with a background in graphic design and web development, seeking to merge creativity with technology.",
  "Data Scientist with experience in machine learning, statistical modeling, and data analytics."
];

const SummarySection: React.FC<SummarySectionProps> = ({ summary, onSummaryChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onSummaryChange(event.target.value);
  };

  const handleSave = () => {
    alert('Summary saved!');
  };

  const handleClear = () => {
    onSummaryChange('');
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSelectPredefined = (selectedSummary: string) => {
    onSummaryChange(selectedSummary);
  };

  const handleCopy = (summaryText: string) => {
    navigator.clipboard.writeText(summaryText).then(() => {
      alert('Summary copied to clipboard!');
    });
  };

  return (
    <div className="summary-section">
      <h3>Summary</h3>

      <div className="summary-header">
        <button className="edit-toggle" onClick={handleEditToggle}>
          <FaEdit /> {isEditing ? 'Stop Editing' : 'Edit Summary'}
        </button>
      </div>

      {isEditing ? (
        <div className="summary-input-container">
          <textarea
            className="summary-textarea"
            value={summary}
            onChange={handleChange}
            placeholder="Write your summary or objective statement here..."
            rows={4} // Allows multiple lines of input
          />
          <div className="summary-footer">
            <button className="save-summary" onClick={handleSave}>
              <FaSave /> Save
            </button>
            <button className="clear-summary" onClick={handleClear}>
              <FaPlus /> Clear
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p className="summary-display">{summary || 'No summary provided.'}</p>

          <div className="predefined-summaries">
            <h4>Select or Copy a Predefined Summary</h4>
            <ul>
              {predefinedSummaries.map((predefinedSummary, index) => (
                <li key={index} className="predefined-summary-item">
                  <button
                    className="predefined-summary-button"
                    onClick={() => handleSelectPredefined(predefinedSummary)}>
                    <FaClipboardList /> {predefinedSummary}
                  </button>
                  <button
                    className="copy-summary-button"
                    onClick={() => handleCopy(predefinedSummary)}>
                    <FaCopy /> Copy
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SummarySection;
