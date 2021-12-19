import React from 'react';

import { Button } from '../Button';

import './AutoplayControllers.css';

const AutoplayControllers = ({
  isAutoplay,
  toggleAutoplay,
  increaseAutoplaySpeed,
  decreaseAutoplaySpeed,
}) => {
  return (
    <div className='autoplay-controllers'>
      <Button onClickButton={increaseAutoplaySpeed} text={'+'} />
      <Button
        onClickButton={toggleAutoplay}
        text={isAutoplay ? 'pause' : 'play'}
      />
      <Button onClickButton={decreaseAutoplaySpeed} text={'-'} />
    </div>
  );
};

export { AutoplayControllers };
