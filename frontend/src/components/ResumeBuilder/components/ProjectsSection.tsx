import React, { useState } from 'react';
import './ProjectsSection.css';

interface Project {
  title: string;
  description: string;
  link: string;
}

const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState<Project>({ title: '', description: '', link: '' });

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
        <button onClick={addProject} className="add-project-button">Add Project</button>
      </div>
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;
