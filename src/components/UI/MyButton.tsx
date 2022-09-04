import React, { FC } from 'react';

interface IMyButton {
  text: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const MyButton: FC<IMyButton> = ({ text, type = 'button' }) => {
  return (
    <button
      className='main-btn'
      type={type}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default MyButton;
