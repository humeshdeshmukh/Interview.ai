import React, { useState } from 'react';
import './CertificationsSection.css';

interface Certification {
  title: string;
  issuingOrganization: string;
  year: string;
}

const CertificationsSection: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [title, setTitle] = useState('');
  const [issuingOrganization, setIssuingOrganization] = useState('');
  const [year, setYear] = useState('');

  const addCertification = () => {
    if (title && issuingOrganization && year) {
      setCertifications([
        ...certifications,
        { title, issuingOrganization, year },
      ]);
      setTitle('');
      setIssuingOrganization('');
      setYear('');
    }
  };

  return (
    <section className="certifications-section">
      <h2>Certifications</h2>
      <div className="certification-inputs">
        <input
          type="text"
          placeholder="Certification Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Issuing Organization"
          value={issuingOrganization}
          onChange={(e) => setIssuingOrganization(e.target.value)}
        />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button onClick={addCertification}>Add Certification</button>
      </div>
      <div className="certification-list">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item">
            <strong>{cert.title}</strong> - {cert.issuingOrganization} ({cert.year})
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
