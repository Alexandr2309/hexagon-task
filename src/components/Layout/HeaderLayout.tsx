import React, { FC } from 'react';
import Header from './Header';
import { IHeaderLayout } from '../../types/propsTypes';

const HeaderLayout: FC<IHeaderLayout> = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};

export default HeaderLayout;
