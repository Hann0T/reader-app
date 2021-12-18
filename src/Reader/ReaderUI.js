import React from 'react';

import { Button } from '../Button';
import { AutoplayControllers } from '../AutoplayControllers';

const ReaderUI = ({
  keyInput,
  keyDown,
  toggleModal,
  increaseFontsize,
  decreaseFontsize,
  fontsize,
  textToShow,
  prevWord,
  renderText,
  toggleAutoplay,
  increaseAutoplaySpeed,
  decreaseAutoplaySpeed,
}) => {
  return (
    <section tabIndex='0' ref={keyInput} onKeyDown={keyDown} className='reader'>
      <div className='container'>
        <Button
          onClickButton={toggleModal}
          customClass={'button-absolute'}
          text={'x'}
        />
        <div className='fontsize-changer'>
          <p className='fontsize-text'>resize</p>
          <Button onClickButton={increaseFontsize} text={'+'} />
          <p className='fontsize-indicator'>{fontsize}</p>
          <Button onClickButton={decreaseFontsize} text={'-'} />
        </div>
        <p className='reader-text' style={{ fontSize: `${fontsize}em` }}>
          {textToShow}
        </p>
        <AutoplayControllers
          increaseAutoplaySpeed={increaseAutoplaySpeed}
          decreaseAutoplaySpeed={decreaseAutoplaySpeed}
          toggleAutoplay={toggleAutoplay}
        />
      </div>
    </section>
  );
};

export { ReaderUI };
