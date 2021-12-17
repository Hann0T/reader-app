import React from 'react';

import { ReadButton } from '../ReadButton';

import './Reader.css';

const Reader = ({ toggleModal, text, numberOfWords }) => {
  const [arrayWords, setArrayWords] = React.useState([]);
  const [length, setLength] = React.useState(0);

  const [fontsize, setFontsize] = React.useState(2);
  const [textToShow, setTextToShow] = React.useState('');
  const [position, setPosition] = React.useState(0);

  let keyInput = React.createRef();

  const prevWord = () => {
    if (!position > 0) return;
    setPosition((prevState) => prevState - numberOfWords);
  };
  const nextWord = () => {
    if (position > length) return;
    setPosition((prevState) => prevState + numberOfWords);
  };

  const keyDown = (ev) => {
    if (ev.key === 'ArrowLeft') return prevWord();
    if (ev.key === 'ArrowRight') return nextWord();
    if (ev.key === 'Escape') return toggleModal();
  };

  const setText = () => {
    let localText = arrayWords[position];

    for (let i = 1; i < numberOfWords; i++) {
      // if (!ArrayWords[position + i]) return;
      localText += ' ' + arrayWords[position + i];
    }

    if (!localText) return setTextToShow('type something');
    setTextToShow(localText);
  };

  const incrementFontsize = () => {
    if (fontsize >= 10) return;
    setFontsize((prevState) => prevState + 1);
  };

  const decrementFontsize = () => {
    if (fontsize <= 2) return;
    setFontsize((prevState) => prevState - 1);
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
        <div className='button-container'>
          <ReadButton onClickButton={incrementFontsize} text={'+'} />
          <p>{fontsize}</p>
          <ReadButton onClickButton={decrementFontsize} text={'-'} />
        </div>
        <p className='reader-text' style={{ fontSize: `${fontsize}em` }}>
          {textToShow}
        </p>
        <div className='button-container'>
          <ReadButton onClickButton={prevWord} text={'prev'} />
          <ReadButton onClickButton={nextWord} text={'next'} />
        </div>
      </div>
    </section>
  );
};

export { Reader };
