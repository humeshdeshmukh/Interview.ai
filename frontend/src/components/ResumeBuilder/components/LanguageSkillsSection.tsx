import React, { useState } from 'react';
import './LanguageSkillsSection.css';

interface LanguageSkill {
  language: string;
  proficiency: string;
}

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
          <input
            type="text"
            placeholder="Proficiency (e.g., Beginner, Intermediate, Fluent)"
            value={skill.proficiency}
            onChange={(e) => handleInputChange(index, 'proficiency', e.target.value)}
          />
          <button className="remove-skill" onClick={() => removeSkill(index)}>Remove</button>
        </div>
      ))}
      <button className="add-skill" onClick={addSkill}>Add Language Skill</button>
    </div>
  );
};

export default LanguageSkillsSection;
