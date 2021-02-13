import React from 'react';

import './ErrorIndicator.css';
import iconError from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className='error-indicator'>
      <img src={ iconError } alt="Icon Error" />
      <span>BOOM!</span>
      <span>Something has gone wrong!!!</span>
    </div>
  );
};

export default ErrorIndicator;
