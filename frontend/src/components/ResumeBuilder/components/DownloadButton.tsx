import React from 'react';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';

interface DownloadButtonProps {
  templateId: string;
  resumeData: any;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ templateId, resumeData }) => {

  const handleDownloadDOCX = () => {
    // Create DOCX content using template
    const docxTemplate = `
      <w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
        <w:body>
          <w:p><w:r><w:t>Resume Template - ${templateId}</w:t></w:r></w:p>
          <w:p><w:r><w:t>Name: ${resumeData?.personalDetails?.name || 'Unknown'}</w:t></w:r></w:p>
          <w:p><w:r><w:t>Education: ${resumeData?.education?.map((edu: any) => edu.degree).join(', ') || 'Not provided'}</w:t></w:r></w:p>
        </w:body>
      </w:document>
    `;

    // Use PizZip to create a ZIP of the DOCX file
    const zip = new PizZip(docxTemplate);
    const doc = new Docxtemplater(zip);

    // Generate the DOCX file as a Blob
    const docBuffer = doc.getZip().generate({ type: 'blob' });

    // Create a link to download the file
    const url = URL.createObjectURL(docBuffer);
    const link = document.createElement('a');
    link.href = url;
    link.download = `template_${templateId}.docx`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="download-options">
      <h3>Download as:</h3>
      <button onClick={handleDownloadDOCX}>Download as DOCX</button>
    </div>
  );
};

export default DownloadButton;
