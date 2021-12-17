import React from 'react';

import { ReadButton } from '../ReadButton';
import { AutoPlay } from '../AutoPlay';

const ReaderUI = ({
  keyInput,
  keyDown,
  toggleModal,
  increaseFontsize,
  decreaseFontsize,
  fontsize,
  textToShow,
  prevWord,
  nextWord,
}) => {
  return (
    <section tabIndex='0' ref={keyInput} onKeyDown={keyDown} className='reader'>
      <div className='container'>
        <ReadButton
          onClickButton={toggleModal}
          customClass={'button-absolute'}
          text={'x'}
        />
        <div className='fontsize-changer'>
          <p className='fontsize-text'>resize</p>
          <ReadButton onClickButton={increaseFontsize} text={'+'} />
          <p className='fontsize-indicator'>{fontsize}</p>
          <ReadButton onClickButton={decreaseFontsize} text={'-'} />
        </div>
        <p className='reader-text' style={{ fontSize: `${fontsize}em` }}>
          {textToShow}
        </p>
        <AutoPlay />
      </div>
    </section>
  );
};

export { ReaderUI };
