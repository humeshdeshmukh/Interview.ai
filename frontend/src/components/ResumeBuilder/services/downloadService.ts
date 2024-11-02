// D:\dowunload\Interview master.ai\frontend\src\components\ResumeBuilder\services\downloadService.ts

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// Function to download the resume as a PDF
export const downloadResumePDF = (resumeData: any) => {
  const doc = new jsPDF();

  // Add personal details
  doc.setFontSize(22);
  doc.text('Resume', 14, 22);
  doc.setFontSize(16);
  doc.text(`Name: ${resumeData.personalDetails.name}`, 14, 40);
  doc.text(`Email: ${resumeData.personalDetails.email}`, 14, 50);
  doc.text(`Phone: ${resumeData.personalDetails.phone}`, 14, 60);
  doc.text(`Address: ${resumeData.personalDetails.address}`, 14, 70);

  // Add education
  doc.setFontSize(18);
  doc.text('Education', 14, 90);
  autoTable(doc, {
    startY: 95,
    head: [['Degree', 'Institution', 'Year']],
    body: resumeData.education.map((edu: any) => [edu.degree, edu.institution, edu.year]),
  });

  // Add experience
  doc.setFontSize(18);
  doc.text('Experience', 14, doc.autoTable.previous.finalY + 20);
  autoTable(doc, {
    startY: doc.autoTable.previous.finalY + 25,
    head: [['Job Title', 'Company', 'Start Year', 'End Year']],
    body: resumeData.experience.map((exp: any) => [exp.jobTitle, exp.company, exp.startYear, exp.endYear]),
  });

  // Add skills
  doc.setFontSize(18);
  doc.text('Skills', 14, doc.autoTable.previous.finalY + 20);
  doc.text(resumeData.skills.join(', '), 14, doc.autoTable.previous.finalY + 30);

  // Add summary
  doc.setFontSize(18);
  doc.text('Summary', 14, doc.autoTable.previous.finalY + 40);
  doc.text(resumeData.summary, 14, doc.autoTable.previous.finalY + 50);

  // Save the PDF
  doc.save(`${resumeData.personalDetails.name}_Resume.pdf`);
};
