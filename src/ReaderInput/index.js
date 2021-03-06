import React from 'react';

import { Modal } from '../Modal';
import { Button } from '../Button';
import { Reader } from '../Reader';

import './ReaderInput.css';

const ReaderInput = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [text, setText] = React.useState('');
  const [numberOfWords, setNumberOfWords] = React.useState(1);

  const onChangeTextArea = (ev) => {
    let text = ev.target.value;
    setText(text);
  };
  const onChangeInput = (ev) => {
    let number = parseInt(ev.target.value);
    setNumberOfWords(number);
  };

  const onClickButton = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <section className='reader-input container'>
      <div className='reader-input__content'>
        <input
          className='number-input'
          value={numberOfWords}
          type='number'
          onChange={onChangeInput}
          min='1'
        />
        <textarea
          value={text}
          onChange={onChangeTextArea}
          placeholder='tu texto...'
          className='text-input'
        />
        <div className='button-container'>
          <Button onClickButton={onClickButton} text={'Leer Texto'} />
        </div>
      </div>
      {openModal && (
        <Modal>
          <Reader
            text={text}
            numberOfWords={numberOfWords}
            toggleModal={onClickButton}
          />
        </Modal>
      )}
    </section>
  );
};

export { ReaderInput };
