import React from 'react';

import { Button } from '../Button';

import './FontsizeControllers.css';

const FontsizeControllers = ({
  fontsize,
  increaseFontsize,
  decreaseFontsize,
}) => {
  return (
    <div className='fontsize-controllers'>
      <p className='fontsize-text'>Tamaño de Fuente</p>
      <Button onClickButton={decreaseFontsize} text={'-'} />
      <p className='fontsize-indicator'>{fontsize}</p>
      <Button onClickButton={increaseFontsize} text={'+'} />
    </div>
  );
};

export { FontsizeControllers };
