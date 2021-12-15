import React from 'react';

import { Modal } from '../Modal';
import { ReadButton } from '../ReadButton';
import { Reader } from '../Reader';

import './App.css';

function App() {
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
    <section className='presentation'>
      <div className='container'>
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
          placeholder='your text...'
          className='text-input'
        />
        <div className='button-container'>
          <ReadButton onClickButton={onClickButton} text={'Read Text'} />
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
}

export { App };
