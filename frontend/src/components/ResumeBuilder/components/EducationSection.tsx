import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSchool, faCalendarAlt, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
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
    setEducationEntries([
      ...educationEntries,
      { degree: '', institution: '', startYear: new Date().getFullYear(), endYear: new Date().getFullYear() },
    ]);
  };

  const handleRemoveEntry = (index: number) => {
    const newEntries = educationEntries.filter((_, i) => i !== index);
    setEducationEntries(newEntries);
  };

  const isValidEntry = (entry: Education) => {
    return entry.degree.trim() !== '' &&
           entry.institution.trim() !== '' &&
           entry.startYear <= entry.endYear;
  };

  return (
    <div className="education-section bg-[#f9f9f9] p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-8 animate-fadeIn">
      <h2 className="text-2xl font-semibold text-[#457b9d] mb-4">Education</h2>

      {educationEntries.map((entry, index) => (
        <div className="education-entry mb-4 flex items-center gap-4" key={index}>
          <div className="flex-1">
            <FontAwesomeIcon icon={faGraduationCap} className="icon text-[#457b9d]" />
            <input
              type="text"
              placeholder="Degree (e.g., BSc in Computer Science)"
              value={entry.degree}
              onChange={(e) => handleChange(index, 'degree', e.target.value)}
              className="input mb-2"
              required
            />
          </div>

          <div className="flex-1">
            <FontAwesomeIcon icon={faSchool} className="icon text-[#457b9d]" />
            <input
              type="text"
              placeholder="Institution (e.g., ABC University)"
              value={entry.institution}
              onChange={(e) => handleChange(index, 'institution', e.target.value)}
              className="input mb-2"
              required
            />
          </div>

          <div className="flex-1">
            <FontAwesomeIcon icon={faCalendarAlt} className="icon text-[#457b9d]" />
            <input
              type="number"
              placeholder="Start Year"
              value={entry.startYear}
              onChange={(e) => handleChange(index, 'startYear', Number(e.target.value))}
              min={1900}
              max={new Date().getFullYear()}
              className="input mb-2"
            />
          </div>

          <div className="flex-1">
            <FontAwesomeIcon icon={faCalendarAlt} className="icon text-[#457b9d]" />
            <input
              type="number"
              placeholder="End Year"
              value={entry.endYear}
              onChange={(e) => handleChange(index, 'endYear', Number(e.target.value))}
              min={entry.startYear}
              max={new Date().getFullYear()}
              className="input mb-2"
            />
          </div>

          <button
            className="remove-entry text-red-500 hover:text-red-700"
            onClick={() => handleRemoveEntry(index)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ))}

      <button
        className="add-entry bg-[#457b9d] text-white font-semibold py-2 px-4 rounded hover:bg-[#1d3557] flex items-center mt-4"
        onClick={handleAddEntry}
      >
        <FontAwesomeIcon icon={faPlus} className="mr-2" />
        Add Education
      </button>

      <div className="validation-messages mt-4">
        {educationEntries.map((entry, index) => (
          !isValidEntry(entry) && (
            <p key={index} className="error-message text-red-500">
              Please complete all fields and ensure the start year is not greater than the end year for entry {index + 1}.
            </p>
          )
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
