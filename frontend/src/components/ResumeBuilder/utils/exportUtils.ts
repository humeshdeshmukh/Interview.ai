// exportUtils.ts
import { jsPDF } from 'jspdf';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';

// Export Resume to PDF
export const exportToPDF = (resumeData: any, templateId: string) => {
  const doc = new jsPDF();
  doc.text('Resume Template', 10, 10);
  doc.text(`Template ID: ${templateId}`, 10, 20);
  
  // Add some dynamic content to the PDF (e.g., Personal Details)
  if (resumeData.personalDetails) {
    doc.text(`Name: ${resumeData.personalDetails.name}`, 10, 30);
    doc.text(`Email: ${resumeData.personalDetails.email}`, 10, 40);
  }

  // Save the PDF
  doc.save(`template_${templateId}.pdf`);
};

// Export Resume to DOCX
export const exportToDOCX = (resumeData: any, templateId: string) => {
  const docxTemplate = `
    <w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
      <w:body>
        <w:p><w:r><w:t>Resume Template - ${templateId}</w:t></w:r></w:p>
        <w:p><w:r><w:t>Name: ${resumeData?.personalDetails?.name || 'Unknown'}</w:t></w:r></w:p>
        <w:p><w:r><w:t>Email: ${resumeData?.personalDetails?.email || 'Unknown'}</w:t></w:r></w:p>
      </w:body>
    </w:document>
  `;

  const zip = new PizZip(docxTemplate);
  const doc = new Docxtemplater(zip);
  const docBuffer = doc.getZip().generate({ type: 'blob' });
  
  const url = URL.createObjectURL(docBuffer);
  const link = document.createElement('a');
  link.href = url;
  link.download = `template_${templateId}.docx`;
  link.click();
  URL.revokeObjectURL(url);
};

// Export Resume to HTML
export const exportToHTML = (resumeData: any, templateId: string) => {
  const htmlContent = `
    <html>
      <head><title>Resume Template</title></head>
      <body>
        <h1>Resume Template - ${templateId}</h1>
        <p>Name: ${resumeData?.personalDetails?.name || 'Unknown'}</p>
        <p>Email: ${resumeData?.personalDetails?.email || 'Unknown'}</p>
      </body>
    </html>
  `;

  const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(htmlBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `template_${templateId}.html`;
  link.click();
  URL.revokeObjectURL(url);
};
