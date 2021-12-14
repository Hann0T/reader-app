import React from 'react';

import { ReadButton } from '../ReadButton';

import './Reader.css';

const Reader = ({ setOpenModal, text, numberOfWords }) => {
  const [textToShow, setTextToShow] = React.useState('');
  const [position, setPosition] = React.useState(0);

  let length = 0;
  let ArrayWords = [];

  const onClickButton = () => {
    setOpenModal((prevState) => !prevState);
  };

  const prevWord = () => {
    if (!position > 0) return;
    setPosition((prevState) => prevState - numberOfWords);
  };
  const nextWord = () => {
    if (position >= length) return;
    setPosition((prevState) => prevState + numberOfWords);
  };

  const splitWords = () => {
    ArrayWords = text.split(' ');
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
