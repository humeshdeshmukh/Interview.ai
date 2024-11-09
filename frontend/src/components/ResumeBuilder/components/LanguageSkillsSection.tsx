import React, { useState } from 'react';
import './LanguageSkillsSection.css';
import { FaPlus, FaTrashAlt } from 'react-icons/fa'; // Importing icons

interface LanguageSkill {
  language: string;
  proficiency: string;
}

const proficiencyLevels: { [key: string]: number } = {
  Beginner: 25,
  Intermediate: 50,
  Advanced: 75,
  Fluent: 100,
};

const LanguageSkillsSection: React.FC = () => {
  const [skills, setSkills] = useState<LanguageSkill[]>([{ language: '', proficiency: '' }]);

  const handleInputChange = (index: number, field: keyof LanguageSkill, value: string) => {
    const updatedSkills = [...skills];
    updatedSkills[index][field] = value;
    setSkills(updatedSkills);
  };

  const addSkill = () => {
    setSkills([...skills, { language: '', proficiency: '' }]);
  };

  const removeSkill = (index: number) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  return (
    <div className="language-skills-section">
      <h3>Language Skills</h3>
      {skills.map((skill, index) => (
        <div key={index} className="skill-input">
          <input
            type="text"
            placeholder="Language"
            value={skill.language}
            onChange={(e) => handleInputChange(index, 'language', e.target.value)}
          />
          <select
            value={skill.proficiency}
            onChange={(e) => handleInputChange(index, 'proficiency', e.target.value)}
            placeholder="Proficiency"
          >
            <option value="">Select Proficiency</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Fluent">Fluent</option>
          </select>
          <div className="proficiency-bar">
            <div
              className="proficiency-level"
              style={{ width: `${proficiencyLevels[skill.proficiency] || 0}%` }}
            ></div>
          </div>
          <button className="remove-skill" onClick={() => removeSkill(index)}>
            <FaTrashAlt /> Remove
          </button>
        </div>
      ))}
      <button className="add-skill" onClick={addSkill}>
        <FaPlus /> Add Language Skill
      </button>
    </div>
  );
};

export default LanguageSkillsSection;
