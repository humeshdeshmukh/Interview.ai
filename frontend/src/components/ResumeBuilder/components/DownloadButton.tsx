import React from 'react';

interface DownloadButtonProps {
  templateId: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ templateId }) => {

  const handleDownloadPDF = () => {
    // Create a PDF blob and download it
    const pdfBlob = new Blob([`PDF content for template ${templateId}`], { type: 'application/pdf' });
    const url = URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `template_${templateId}.pdf`;
    link.click();
    URL.revokeObjectURL(url); // Clean up
  };

  const handleDownloadDOCX = () => {
    // Create a DOCX blob and download it
    const docxBlob = new Blob([`DOCX content for template ${templateId}`], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const url = URL.createObjectURL(docxBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `template_${templateId}.docx`;
    link.click();
    URL.revokeObjectURL(url); // Clean up
  };

  const handleDownloadHTML = () => {
    // Create an HTML blob and download it
    const htmlContent = `<html><body><h1>HTML content for template ${templateId}</h1></body></html>`;
    const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(htmlBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `template_${templateId}.html`;
    link.click();
    URL.revokeObjectURL(url); // Clean up
  };

  return (
    <div className="download-options">
      <h3>Download as:</h3>
      <button onClick={handleDownloadPDF}>PDF</button>
      <button onClick={handleDownloadDOCX}>DOCX</button>
      <button onClick={handleDownloadHTML}>HTML</button>
    </div>
  );
};

export default DownloadButton;
