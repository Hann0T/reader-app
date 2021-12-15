import React from 'react';

import { ReadButton } from '../ReadButton';

import './Reader.css';

const Reader = ({ toggleModal, text, numberOfWords }) => {
  const [textToShow, setTextToShow] = React.useState('');
  const [position, setPosition] = React.useState(0);

  let length = 0;
  let ArrayWords = [];
  let keyInput = React.createRef();

  const prevWord = () => {
    if (!position > 0) return;
    setPosition((prevState) => prevState - numberOfWords);
  };
  const nextWord = () => {
    if (position >= length) return;
    setPosition((prevState) => prevState + numberOfWords);
  };

  const splitWords = () => {
    ArrayWords = text.split(/ |\n/);
    ArrayWords = ArrayWords.filter((word) => word);
    length = ArrayWords.length - 1;
    setText(ArrayWords);
  };

  const setText = (ArrayWords) => {
    let text = ArrayWords[position];

    for (let i = 1; i < numberOfWords; i++) {
      // if (!ArrayWords[position + i]) return;
      text += ' ' + ArrayWords[position + i];
    }

    if (!text) return setTextToShow('type something');
    setTextToShow(text);
  };

  const keyDown = (ev) => {
    if (ev.key === 'ArrowLeft') return prevWord();
    if (ev.key === 'ArrowRight') return nextWord();
    if (ev.key === 'Escape') return toggleModal();
  };

  React.useEffect(() => {
    splitWords(position);
    keyInput.current.focus();
  });

  return (
    <section tabIndex='0' ref={keyInput} onKeyDown={keyDown} className='reader'>
      <div className='container'>
        <ReadButton
          onClickButton={toggleModal}
          customClass={'button-absolute'}
          text={'x'}
        />
        <p className='reader-text'>{textToShow}</p>
        <div className='button-container'>
          <ReadButton onClickButton={prevWord} text={'prev'} />
          <ReadButton onClickButton={nextWord} text={'next'} />
        </div>
      </div>
    </section>
  );
};

export { Reader };
