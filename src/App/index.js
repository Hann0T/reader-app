import React from 'react';

import { Modal } from '../Modal';
import { ReadButton } from '../ReadButton';
import { Reader } from '../Reader';

import './App.css';

function App() {
  const [openModal, setOpenModal] = React.useState(false);
  const [text, setText] = React.useState('');

  const onChange = (ev) => {
    let text = ev.target.value;
    setText(text);
  };

  const onClickButton = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <section className='presentation'>
      <div className='container'>
        <textarea
          value={text}
          onChange={onChange}
          placeholder='your text...'
          className='text-input'
        />
        <div className='button-container'>
          <ReadButton onClickButton={onClickButton} text={'Read Text'} />
        </div>
      </div>
      {openModal && (
        <Modal>
          <Reader text={text} setOpenModal={setOpenModal} />
        </Modal>
      )}
    </section>
  );
}

export { App };
