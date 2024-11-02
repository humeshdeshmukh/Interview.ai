import React from 'react';
import './TemplateSelector.css';

interface Template {
  id: string;
  name: string;
  previewImage: string; // URL or path to the template preview image
}

interface TemplateSelectorProps {
  templates: Template[];
  selectedTemplateId: string;
  onTemplateSelect: (templateId: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ templates, selectedTemplateId, onTemplateSelect }) => {
  return (
    <div className="template-selector">
      <h3>Select a Resume Template</h3>
      <div className="template-options">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`template-option ${selectedTemplateId === template.id ? 'selected' : ''}`}
            onClick={() => onTemplateSelect(template.id)}
          >
            <img src={template.previewImage} alt={template.name} className="template-preview" />
            <span>{template.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
