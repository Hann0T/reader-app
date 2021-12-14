import React from 'react';

import { ReadButton } from '../ReadButton';

import './Reader.css';

const Reader = ({ setOpenModal, text }) => {
  const [textToShow, setTextToShow] = React.useState('');
  const [position, setPosition] = React.useState(0);

  let length = 0;
  let ArrayWords = [];

  // const onKeyDown = (ev) => {
  //   if (ev.key === 'ArrowLeft') return prevWord();
  //   if (ev.key === 'ArrowRight') return nextWord();
  // };

  const onClickButton = () => {
    setOpenModal((prevState) => !prevState);
  };

  const prevWord = () => {
    if (!position > 0) return;
    setPosition((prevState) => prevState - 1);
  };
  const nextWord = () => {
    if (position >= length) return;
    setPosition((prevState) => prevState + 1);
  };

  const splitWords = () => {
    ArrayWords = text.split(' ');
    length = ArrayWords.length - 1;
    setTextToShow(ArrayWords[position]);
  };

  // const setText = (numOfWords) => {
  //   let newText = '';
  //   ArrayWords.forEach((word, index) => {
  //     if (index > numOfWords - 1) return;
  //     newText += word + ' ';
  //   });

  //   setTextToShow(newText);
  // };

  React.useEffect(() => {
    splitWords(position);
  });

  return (
    <section className='reader'>
      <div className='container'>
        <ReadButton
          onClickButton={onClickButton}
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
