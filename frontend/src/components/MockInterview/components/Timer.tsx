import React, { useState, useEffect, useCallback } from 'react';
import '../styles/Timer.css'; // Import custom styling

const Timer: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval!);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, time]);

  const formatTime = useCallback((seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }, []);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="timer">
      <h3>Timer</h3>
      <div className="timer-display">
        <span>{formatTime(time)}</span>
      </div>
      <div className="timer-controls">
        <button onClick={handleStart} disabled={isRunning} className="btn-start">Start</button>
        <button onClick={handleStop} disabled={!isRunning} className="btn-stop">Stop</button>
        <button onClick={handleReset} className="btn-reset">Reset</button>
      </div>
    </div>
  );
};

export default Timer;
