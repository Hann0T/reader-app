import React from 'react';

import { Button } from '../Button';
import { AutoplayControllers } from '../AutoplayControllers';
import { FontsizeControllers } from '../FontsizeControllers';
import { Timer } from '../Timer';

import './Reader.css';

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
  isAutoplay,
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
        <FontsizeControllers
          fontsize={fontsize}
          increaseFontsize={increaseFontsize}
          decreaseFontsize={decreaseFontsize}
        />
        <p className='reader-text' style={{ fontSize: `${fontsize}em` }}>
          {textToShow}
        </p>
        <AutoplayControllers
          increaseAutoplaySpeed={increaseAutoplaySpeed}
          decreaseAutoplaySpeed={decreaseAutoplaySpeed}
          toggleAutoplay={toggleAutoplay}
          isAutoplay={isAutoplay}
        />
        <Timer />
      </div>
    </section>
  );
};

export { ReaderUI };
