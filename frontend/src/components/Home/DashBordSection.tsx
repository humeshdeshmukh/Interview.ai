import React from 'react';

interface DashBordSectionProps {
  // Define props that the component might receive if needed
  userName: string;
  recentActivity: string[];
}

const DashBordSection: React.FC<DashBordSectionProps> = ({ userName, recentActivity }) => {
  return (
    <div className="dashboard-section">
      <h2>Welcome, {userName}!</h2>

      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <ul>
          {recentActivity.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Other dashboard content like charts, graphs, or data summaries */}
    </div>
  );
};

export default DashBordSection;