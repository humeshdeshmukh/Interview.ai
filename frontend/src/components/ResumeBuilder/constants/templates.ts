// templates.ts

export interface Template {
  id: string;
  name: string;
  previewImage: string;
  availableSections: string[];  // Sections that are available in the template
}

export const templates: Template[] = [
  {
    id: '1',
    name: 'Template A',
    previewImage: 'https://path/to/template-a-preview.jpg',  // URL to preview image
    availableSections: [
      'Personal Details',
      'Education',
      'Experience',
      'Skills',
      'Certifications',
      'Projects',
      'Summary'
    ],
  },
  {
    id: '2',
    name: 'Template B',
    previewImage: 'https://path/to/template-b-preview.jpg',
    availableSections: [
      'Personal Details',
      'Education',
      'Experience',
      'Skills',
      'Summary',
      'References',
    ],
  },
  {
    id: '3',
    name: 'Template C',
    previewImage: 'https://path/to/template-c-preview.jpg',
    availableSections: [
      'Personal Details',
      'Education',
      'Experience',
      'Skills',
      'Summary',
      'Declaration',
    ],
  },
  // Add more templates as needed
];

// Optionally, you could export functions or helper methods to manage templates.
export const getTemplateById = (id: string): Template | undefined => {
  return templates.find(template => template.id === id);
};
