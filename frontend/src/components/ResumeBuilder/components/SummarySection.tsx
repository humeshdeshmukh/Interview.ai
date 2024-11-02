import React from 'react';
import './SummarySection.css';

interface SummarySectionProps {
  summary: string;
  onSummaryChange: (summary: string) => void;
}

const SummarySection: React.FC<SummarySectionProps> = ({ summary, onSummaryChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onSummaryChange(event.target.value);
  };

  return (
    <div className="summary-section">
      <h3>Summary</h3>
      <textarea
        className="summary-textarea"
        value={summary}
        onChange={handleChange}
        placeholder="Write your summary or objective statement here..."
      />
    </div>
  );
};

export default SummarySection;
