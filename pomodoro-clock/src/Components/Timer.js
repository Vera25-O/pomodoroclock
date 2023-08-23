import React, { useState, useEffect } from 'react';

const Timer = ({ interval, onIntervalComplete }) => {
  const [timeLeft, setTimeLeft] = useState(interval);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;

    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      onIntervalComplete();
    }

    return () => clearInterval(timer);
  }, [isActive, timeLeft, onIntervalComplete]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="timer">
      <h1>{formatTime(timeLeft)}</h1>
      <button onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
    </div>
  );
};

export default Timer;
