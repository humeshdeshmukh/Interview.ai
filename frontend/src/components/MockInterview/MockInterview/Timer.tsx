// src/components/MockInterview/Timer.tsx
import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
      <h3>Time Elapsed: {seconds}s</h3>
    </div>
  );
};

export default Timer;
