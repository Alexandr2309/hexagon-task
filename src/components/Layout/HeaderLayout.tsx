import React, { FC } from 'react';
import Header from './Header';

interface IHeaderLayout {
  children: React.ReactElement | React.ReactNode;
}

const HeaderLayout: FC<IHeaderLayout> = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};

export default HeaderLayout;
