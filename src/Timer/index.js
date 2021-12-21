import React from 'react';
import { useStopwatch } from 'react-timer-hook';

import './Timer.css';

const Timer = () => {
  const { seconds, minutes, hours, days } = useStopwatch({
    autoStart: true,
  });

  return (
    <div className='timer'>
      <p>Tiempo</p>
      <div style={{ fontSize: '14px' }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
    </div>
  );
};

export { Timer };
