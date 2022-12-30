import React, { FC } from 'react';

import { ReactComponent as AddIcon } from '@/assets/icons/add.svg';

import { IButton } from './type';

import './styles.scss';

const Button: FC<IButton> = ({ size, text, color }) => {
  return (
    <div className={`button button--${size} button--${color}`}>
      {size === 'drop' && color === 'filter' ? (
        <AddIcon />
      ) : (
        <span className="button__text">{text}</span>
      )}
    </div>
  );
};

export default Button;
