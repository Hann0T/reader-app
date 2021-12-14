import React from 'react';

import './ReadButton.css';

const ReadButton = ({ onClickButton, text, customClass }) => {
  if (!customClass) customClass = '';
  return (
    <button onClick={onClickButton} className={`button ${customClass}`}>
      {text}
    </button>
  );
};

export { ReadButton };
