import React, { useState } from 'react';
import './SkillsSection.css';

interface SkillsSectionProps {
  skills: string[];
  onSkillsChange: (skills: string[]) => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, onSkillsChange }) => {
  // Ensure skills is an array
  if (!Array.isArray(skills)) {
    console.error("Expected skills to be an array, but received:", skills);
    skills = []; // Fallback to an empty array if skills is not valid
  }

  const [skillInput, setSkillInput] = useState('');

  const handleAddSkill = () => {
    if (skillInput && !skills.includes(skillInput)) {
      onSkillsChange([...skills, skillInput]);
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    onSkillsChange(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="skills-section">
      <h3>Skills</h3>
      <div className="skills-input">
        <input
          type="text"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          placeholder="Add a skill"
        />
        <button onClick={handleAddSkill}>Add</button>
      </div>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
            <button className="remove-skill" onClick={() => handleRemoveSkill(skill)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsSection;
