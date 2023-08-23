import React, { useState } from "react";

import Timer from "./Components/Timer";
import Alarm from "./Components/Alarm";

function App() {
  const [workTime, setWorkTime] = useState(25 * 60); // 25 minutes in seconds
  const [showAlarm, setShowAlarm] = useState(false);

  const handleIntervalComplete = () => {
    setShowAlarm(true);
  };

  const stopAlarm = () => {
    setShowAlarm(false);
    setWorkTime(25 * 60); // Reset work time to 25 minutes
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pomodoro Clock</h1>
        <Timer
          interval={workTime}
          onIntervalComplete={handleIntervalComplete}
        />
        {showAlarm && <Alarm stopAlarm={stopAlarm} />}
      </header>
    </div>
  );
}

export default App;
