import React from 'react';

import { ReadButton } from '../ReadButton';
import { Timer } from '../Timer';
import './Reader.css';

const Reader = ({ toggleModal, text, numberOfWords }) => {
  const [textToShow, setTextToShow] = React.useState('');
  const [position, setPosition] = React.useState(0);
  const [length, setLength] = React.useState(0);
  const [arrayWords, setArrayWords] = React.useState([]);

  let keyInput = React.createRef();

  const prevWord = () => {
    if (!position > 0) return;
    setPosition((prevState) => prevState - numberOfWords);
  };
  const nextWord = () => {
    if (position >= length) return;
    setPosition((prevState) => prevState + numberOfWords);
  };

  const keyDown = (ev) => {
    if (ev.key === 'ArrowLeft') return prevWord();
    if (ev.key === 'ArrowRight') return nextWord();
    if (ev.key === 'Escape') return toggleModal();
  };

  const setText = () => {
    console.log('asdf');
    let text = arrayWords[position];

    for (let i = 1; i < numberOfWords; i++) {
      // if (!ArrayWords[position + i]) return;
      text += ' ' + arrayWords[position + i];
    }

    if (!text) return setTextToShow('type something');
    setTextToShow(text);
  };

  React.useEffect(() => {
    let newArrayWords = text.split(/ |\n/);
    let newArrayWordsFixed = newArrayWords.filter((word) => word);
    let arrayLength = newArrayWordsFixed.length - 1;
    setArrayWords(newArrayWordsFixed);
    setLength(arrayLength);
  }, [text]);

  React.useEffect(() => {
    keyInput.current.focus();
    setText();
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
        <Timer/>
      </div>
    </section>
  );
};

export { Reader };
