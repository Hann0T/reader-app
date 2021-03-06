import React from 'react';

import { ReaderUI } from './ReaderUI';

const Reader = ({ toggleModal, text, numberOfWords }) => {
  const [arrayWords, setArrayWords] = React.useState([]);

  const [fontsize, setFontsize] = React.useState(2);
  const [textToShow, setTextToShow] = React.useState('');
  const [position, setPosition] = React.useState(0);
  const [isAutoplay, setIsAutoplay] = React.useState(false);
  const [autoplaySpeed, setAutoplaySpeed] = React.useState(1000);

  let keyInput = React.createRef();
  let firstTouchPosition = 0;

  const prevWord = () => {
    if (!position > 0) return;
    setPosition((prevState) => prevState - numberOfWords);
  };

  const nextWord = () => {
    if (position > arrayWords.length - 1) return;
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
    if (ev.key === ' ') return toggleAutoplay();
  };

  const onTouchStart = (ev) => {
    firstTouchPosition = ev.touches[0].screenX;
  };
  const onTouchEnd = (ev) => {
    let lastTouchPosition = ev.changedTouches[0].screenX;
    if (firstTouchPosition > lastTouchPosition) nextWord();
    if (firstTouchPosition < lastTouchPosition) prevWord();
  };

  const renderText = () => {
    let localText = arrayWords[position] ? arrayWords[position] : '';

    for (let i = 1; i < numberOfWords; i++) {
      localText += ' ';
      localText += arrayWords[position + i] ? arrayWords[position + i] : '';
    }

    if (position >= arrayWords.length) localText = 'Se acabó el texto';
    if (arrayWords.length <= 0) localText = 'No hay texto para mostrar';

    setTextToShow(localText);
  };

  const toggleAutoplay = () => {
    setIsAutoplay((prevState) => !prevState);
  };

  const increaseAutoplaySpeed = () => {
    if (autoplaySpeed <= 500) return;
    setAutoplaySpeed((prevState) => prevState - 500);
  };

  const decreaseAutoplaySpeed = () => {
    if (autoplaySpeed >= 5000) return;
    setAutoplaySpeed((prevState) => prevState + 500);
  };

  // AutoPlay
  React.useEffect(() => {
    if (!isAutoplay) return;
    if (position >= arrayWords.length) return;
    const intervalID = setInterval(() => {
      nextWord();
    }, autoplaySpeed);
    return () => {
      clearInterval(intervalID);
    };
  });

  React.useEffect(() => {
    let newArrayWords = text.split(/ |\n/).filter((word) => word);
    setArrayWords(newArrayWords);
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
      renderText={renderText}
      isAutoplay={isAutoplay}
      toggleAutoplay={toggleAutoplay}
      increaseAutoplaySpeed={increaseAutoplaySpeed}
      decreaseAutoplaySpeed={decreaseAutoplaySpeed}
      autoplaySpeed={autoplaySpeed}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    />
  );
};

export { Reader };
