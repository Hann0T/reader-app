import React from 'react';

import { Button } from '../Button';

const AutoplayControllers = ({
  toggleAutoplay,
  increaseAutoplaySpeed,
  decreaseAutoplaySpeed,
}) => {
  return (
    <div className='autoplay-controllers'>
      <Button onClickButton={increaseAutoplaySpeed} text={'+'} />
      <Button onClickButton={toggleAutoplay} text={'play/pause'} />
      <Button onClickButton={decreaseAutoplaySpeed} text={'-'} />
    </div>
  );
};

export { AutoplayControllers };
