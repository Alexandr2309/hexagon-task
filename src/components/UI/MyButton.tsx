import React, { FC } from 'react';
import { IMyButton } from '../../types/propsTypes';

const MyButton: FC<IMyButton> = ({ text, type = 'button' }) => {
  return (
    <button
      className="main-btn"
      type={type}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default MyButton;
