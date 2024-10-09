import React, { useEffect, useState } from 'react';
import { getInterviews } from '../services/interviewService'; // Import the service

const InterviewList: React.FC = () => {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await getInterviews();
        setInterviews(response);
      } catch (error) {
        console.error('Error fetching interviews:', error);
      }
    };

    fetchInterviews();
  }, []);

  return (
    <div>
      <h2>Interview List</h2>
      <ul>
        {interviews.map((interview, index) => (
          <li key={index}>{interview.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default InterviewList;
