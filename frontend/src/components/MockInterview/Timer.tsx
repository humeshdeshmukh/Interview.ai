import React, { useState, useEffect, useRef } from 'react';
import { Button, Card } from 'react-bootstrap';
// import './Timer.css'; // Import custom styles if needed

const Timer: React.FC = () => {
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning && !isPaused) {
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (isPaused) {
      clearInterval(timerRef.current!);
    } else {
      clearInterval(timerRef.current!);
    }

    return () => clearInterval(timerRef.current!);
  }, [isRunning, isPaused]);

  const handleStart = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTime(0);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
  };

  return (
    <Card className="timer-card p-4">
      <Card.Body className="text-center">
        <Card.Title>Timer</Card.Title>
        <Card.Text className="display-4 mb-4">{formatTime(time)}</Card.Text>
        <div className="d-flex justify-content-center gap-2">
          <Button variant="success" onClick={handleStart} disabled={isRunning}>
            Start
          </Button>
          <Button variant="warning" onClick={handlePause} disabled={!isRunning || isPaused}>
            Pause
          </Button>
          <Button variant="danger" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Timer;
