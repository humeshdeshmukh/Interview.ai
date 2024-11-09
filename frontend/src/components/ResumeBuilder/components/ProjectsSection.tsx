import React, { useState } from 'react';
import './ProjectsSection.css';
import { FaPlus, FaTrashAlt, FaEdit, FaRegWindowClose, FaSave } from 'react-icons/fa'; // Importing icons

interface Project {
  title: string;
  description: string;
  link: string;
}

const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState<Project>({ title: '', description: '', link: '' });
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const addProject = () => {
    if (newProject.title && newProject.description) {
      setProjects([...projects, newProject]);
      setNewProject({ title: '', description: '', link: '' }); // Reset input fields
    }
  };

  const editProject = (index: number) => {
    setEditIndex(index);
    setNewProject({ ...projects[index] });
  };

  const saveProject = () => {
    if (editIndex !== null) {
      const updatedProjects = [...projects];
      updatedProjects[editIndex] = newProject;
      setProjects(updatedProjects);
      setNewProject({ title: '', description: '', link: '' });
      setEditIndex(null);
    }
  };

  const deleteProject = (index: number) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  const clearAllProjects = () => {
    setProjects([]);
  };

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="project-input">
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={newProject.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Project Description"
          value={newProject.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="link"
          placeholder="Project Link (optional)"
          value={newProject.link}
          onChange={handleChange}
        />
        <button onClick={editIndex === null ? addProject : saveProject} className="add-project-button">
          {editIndex === null ? <FaPlus /> : <FaSave />} {editIndex === null ? 'Add Project' : 'Save Project'}
        </button>
      </div>
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
            <div className="project-actions">
              <button onClick={() => editProject(index)}>
                <FaEdit /> Edit
              </button>
              <button onClick={() => deleteProject(index)}>
                <FaTrashAlt /> Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className="clear-all-projects" onClick={clearAllProjects}>
        <FaRegWindowClose /> Clear All Projects
      </button>
    </div>
  );
};

export default ProjectsSection;
