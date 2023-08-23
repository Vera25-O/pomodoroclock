import React from 'react';

const Alarm = ({ stopAlarm }) => {
  return (
    <div className="alarm">
      <audio autoPlay loop>
        <source src="path-to-your-alarm-sound.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <p>Time's up! Take a break.</p>
      <button onClick={stopAlarm}>Stop Alarm</button>
    </div>
  );
};

export default Alarm;
