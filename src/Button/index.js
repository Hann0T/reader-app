import React from 'react';

import './Button.css';

const Button = ({ onClickButton, text, customClass }) => {
  if (!customClass) customClass = '';
  return (
    <button onClick={onClickButton} className={`button ${customClass}`}>
      {text}
    </button>
  );
};

export { Button };
