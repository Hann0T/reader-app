import React from 'react';

import { ReaderUI } from './ReaderUI';

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

  const increaseFontsize = () => {
    if (fontsize >= 10) return;
    setFontsize((prevState) => prevState + 1);
  };

  const decreaseFontsize = () => {
    if (fontsize <= 2) return;
    setFontsize((prevState) => prevState - 1);
  };

  const keyDown = (ev) => {
    if (ev.key === 'ArrowLeft') return prevWord();
    if (ev.key === 'ArrowRight') return nextWord();
    if (ev.key === 'ArrowUp') return increaseFontsize();
    if (ev.key === 'ArrowDown') return decreaseFontsize();
    if (ev.key === 'Escape') return toggleModal();
  };

  const renderText = () => {
    let localText = arrayWords[position];

    for (let i = 1; i < numberOfWords; i++) {
      // if (!ArrayWords[position + i]) return;
      localText += ' ' + arrayWords[position + i];
    }

    if (!localText) return setTextToShow('type something');
    setTextToShow(localText);
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
    renderText();
  });

  return (
    <ReaderUI
      keyInput={keyInput}
      keyDown={keyDown}
      toggleModal={toggleModal}
      increaseFontsize={increaseFontsize}
      decreaseFontsize={decreaseFontsize}
      fontsize={fontsize}
      textToShow={textToShow}
      prevWord={prevWord}
      nextWord={nextWord}
    />
  );
};

export { Reader };
