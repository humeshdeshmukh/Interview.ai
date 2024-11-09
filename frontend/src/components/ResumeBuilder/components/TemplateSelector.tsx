import React from 'react';
import './TemplateSelector.css';
import { FaCheckCircle } from 'react-icons/fa';

interface Template {
  id: string;
  name: string;
  previewImage: string;
}

interface TemplateSelectorProps {
  templates: Template[];
  selectedTemplateId: string;
  onTemplateSelect: (templateId: string) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  templates,
  selectedTemplateId,
  onTemplateSelect
}) => {
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
            <div className="template-preview-container">
              <img src={template.previewImage} alt={template.name} className="template-preview" />
              {selectedTemplateId === template.id && (
                <FaCheckCircle className="selected-icon" />
              )}
            </div>
            <span className="template-name">{template.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
