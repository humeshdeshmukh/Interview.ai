import React, { useState } from 'react';
import './SkillsSection.css';
import { FaPlus, FaTrashAlt, FaEdit, FaRegWindowClose, FaArrowUp, FaArrowDown, FaSave } from 'react-icons/fa'; // Importing relevant icons

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
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState('');

  const handleAddSkill = () => {
    if (skillInput && !skills.includes(skillInput)) {
      onSkillsChange([...skills, skillInput]);
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    onSkillsChange(skills.filter(skill => skill !== skillToRemove));
  };

  const handleEditSkill = (index: number) => {
    setEditIndex(index);
    setSkillInput(skills[index]);
  };

  const handleSaveSkill = () => {
    if (editIndex !== null && skillInput) {
      const updatedSkills = [...skills];
      updatedSkills[editIndex] = skillInput;
      onSkillsChange(updatedSkills);
      setEditIndex(null);
      setSkillInput('');
    }
  };

  const handleClearAll = () => {
    onSkillsChange([]);
  };

  const handleMoveSkillUp = (index: number) => {
    if (index > 0) {
      const updatedSkills = [...skills];
      const temp = updatedSkills[index];
      updatedSkills[index] = updatedSkills[index - 1];
      updatedSkills[index - 1] = temp;
      onSkillsChange(updatedSkills);
    }
  };

  const handleMoveSkillDown = (index: number) => {
    if (index < skills.length - 1) {
      const updatedSkills = [...skills];
      const temp = updatedSkills[index];
      updatedSkills[index] = updatedSkills[index + 1];
      updatedSkills[index + 1] = temp;
      onSkillsChange(updatedSkills);
    }
  };

  const filteredSkills = skills.filter(skill => skill.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="skills-section">
      <h3>Skills</h3>
      <div className="skills-input">
        <input
          type="text"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          placeholder="Add or Edit a skill"
        />
        <button onClick={editIndex === null ? handleAddSkill : handleSaveSkill}>
          {editIndex === null ? <FaPlus /> : <FaSave />} {editIndex === null ? 'Add' : 'Save'}
        </button>
      </div>

      <div className="skills-search">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Filter skills"
        />
      </div>

      <ul className="skills-list">
        {filteredSkills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
            <div className="skill-actions">
              <button className="edit-skill" onClick={() => handleEditSkill(index)}>
                <FaEdit />
              </button>
              <button className="remove-skill" onClick={() => handleRemoveSkill(skill)}>
                <FaTrashAlt />
              </button>
              <button className="move-up" onClick={() => handleMoveSkillUp(index)}>
                <FaArrowUp />
              </button>
              <button className="move-down" onClick={() => handleMoveSkillDown(index)}>
                <FaArrowDown />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button className="clear-all-skills" onClick={handleClearAll}>
        <FaRegWindowClose /> Clear All Skills
      </button>
    </div>
  );
};

export default SkillsSection;
