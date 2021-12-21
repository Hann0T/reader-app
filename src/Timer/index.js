import React from 'react';
import { useStopwatch } from 'react-timer-hook';

  
  export { Timer };
  const Timer = ( ) => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });


  return (
    <div style={{textAlign: 'center'}}>

      <p>Timer</p>
      <div style={{fontSize: '14px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>

    </div>
  );
}

export default function App() {
  return (
    <div>
      <Timer />
    </div>
  );
}