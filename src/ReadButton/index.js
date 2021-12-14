import React from 'react';

const ReadButton = ({ onClickButton, text }) => {
  return (
    <button onClick={onClickButton} className='button'>
      {text}
    </button>
  );
};

export { ReadButton };
