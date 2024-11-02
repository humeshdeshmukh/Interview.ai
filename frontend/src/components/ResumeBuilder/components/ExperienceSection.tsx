import React, { useState } from 'react';
import './ExperienceSection.css';

interface Experience {
  jobTitle: string;
  company: string;
  startYear: number;
  endYear: number;
  responsibilities: string;
}

const ExperienceSection: React.FC = () => {
  const [experienceEntries, setExperienceEntries] = useState<Experience[]>([
    { jobTitle: '', company: '', startYear: new Date().getFullYear(), endYear: new Date().getFullYear(), responsibilities: '' },
  ]);

  const handleChange = (index: number, field: keyof Experience, value: string | number) => {
    const newEntries = [...experienceEntries];
    newEntries[index][field] = value as any;
    setExperienceEntries(newEntries);
  };

  const handleAddEntry = () => {
    setExperienceEntries([...experienceEntries, { jobTitle: '', company: '', startYear: new Date().getFullYear(), endYear: new Date().getFullYear(), responsibilities: '' }]);
  };

  const handleRemoveEntry = (index: number) => {
    const newEntries = experienceEntries.filter((_, i) => i !== index);
    setExperienceEntries(newEntries);
  };

  return (
    <div className="experience-section">
      <h2>Experience</h2>
      {experienceEntries.map((entry, index) => (
        <div className="experience-entry" key={index}>
          <input
            type="text"
            placeholder="Job Title"
            value={entry.jobTitle}
            onChange={(e) => handleChange(index, 'jobTitle', e.target.value)}
          />
          <input
            type="text"
            placeholder="Company"
            value={entry.company}
            onChange={(e) => handleChange(index, 'company', e.target.value)}
          />
          <input
            type="number"
            placeholder="Start Year"
            value={entry.startYear}
            onChange={(e) => handleChange(index, 'startYear', Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="End Year"
            value={entry.endYear}
            onChange={(e) => handleChange(index, 'endYear', Number(e.target.value))}
          />
          <textarea
            placeholder="Responsibilities"
            value={entry.responsibilities}
            onChange={(e) => handleChange(index, 'responsibilities', e.target.value)}
          />
          <button className="remove-entry" onClick={() => handleRemoveEntry(index)}>Remove</button>
        </div>
      ))}
      <button className="add-entry" onClick={handleAddEntry}>Add Experience</button>
    </div>
  );
};

export default ExperienceSection;