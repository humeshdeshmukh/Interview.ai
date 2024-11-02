// D:\dowunload\Interview master.ai\frontend\src\components\ResumeBuilder\constants\templates.ts

export interface ResumeTemplate {
    id: string;
    name: string;
    previewImage: string; // URL/path to the template preview image
  }
  
  // Array of resume templates
  export const templates: ResumeTemplate[] = [
    {
      id: '1',
      name: 'Template A',
      previewImage: '/path/to/template-a-preview.png',
    },
    {
      id: '2',
      name: 'Template B',
      previewImage: '/path/to/template-b-preview.png',
    },
    {
      id: '3',
      name: 'Template C',
      previewImage: '/path/to/template-c-preview.png',
    },
    // Add more templates as needed
  ];
  