import React, { useState } from 'react';
import './EducationSection.css';

interface Education {
  degree: string;
  institution: string;
  startYear: number;
  endYear: number;
}

const EducationSection: React.FC = () => {
  const [educationEntries, setEducationEntries] = useState<Education[]>([
    { degree: '', institution: '', startYear: new Date().getFullYear(), endYear: new Date().getFullYear() },
  ]);

  const handleChange = (index: number, field: keyof Education, value: string | number) => {
    const newEntries = [...educationEntries];
    newEntries[index][field] = value as any;
    setEducationEntries(newEntries);
  };

  const handleAddEntry = () => {
    setEducationEntries([...educationEntries, { degree: '', institution: '', startYear: new Date().getFullYear(), endYear: new Date().getFullYear() }]);
  };

  const handleRemoveEntry = (index: number) => {
    const newEntries = educationEntries.filter((_, i) => i !== index);
    setEducationEntries(newEntries);
  };

  // Validation function
  const isValidEntry = (entry: Education) => {
    return entry.degree.trim() !== '' && 
           entry.institution.trim() !== '' && 
           entry.startYear <= entry.endYear;
  };

  return (
    <div className="education-section">
      <h2>Education</h2>
      {educationEntries.map((entry, index) => (
        <div className="education-entry" key={index}>
          <input
            type="text"
            placeholder="Degree"
            value={entry.degree}
            onChange={(e) => handleChange(index, 'degree', e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Institution"
            value={entry.institution}
            onChange={(e) => handleChange(index, 'institution', e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Start Year"
            value={entry.startYear}
            onChange={(e) => handleChange(index, 'startYear', Number(e.target.value))}
            min={1900} // Set a minimum year for validation
            max={new Date().getFullYear()} // Set maximum to current year
          />
          <input
            type="number"
            placeholder="End Year"
            value={entry.endYear}
            onChange={(e) => handleChange(index, 'endYear', Number(e.target.value))}
            min={entry.startYear} // End year should not be less than start year
            max={new Date().getFullYear()} // Set maximum to current year
          />
          <button className="remove-entry" onClick={() => handleRemoveEntry(index)}>Remove</button>
        </div>
      ))}
      <button className="add-entry" onClick={handleAddEntry}>Add Education</button>
      <div className="validation-messages">
        {educationEntries.map((entry, index) => (
          !isValidEntry(entry) && (
            <p key={index} className="error-message">
              Please check the fields for entry {index + 1}. Ensure all fields are filled and the Start Year is not greater than the End Year.
            </p>
          )
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
