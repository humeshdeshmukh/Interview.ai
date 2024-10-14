import React, { useEffect, useState } from 'react';
import { getInterviews } from '../services/interviewService'; // Import the service

// Define the type for an interview
interface Interview {
  title: string;
  // Add other fields as needed
}

const InterviewList: React.FC = () => {
  const [interviews, setInterviews] = useState<Interview[]>([]); // Define state with Interview[] type

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response: Interview[] = await getInterviews(); // Make sure response matches the Interview type
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
