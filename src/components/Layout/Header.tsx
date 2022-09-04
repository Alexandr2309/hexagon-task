import React, { FC } from 'react';
import IsAuth from './IsAuth';
import ExpandedMenu from './ExpandedMenu';
import { useWindowSize } from '../../hooks/useWindowSize';
import CollapsedMenu from './CollapsedMenu';
import paths from '../../utils/path';

const HeaderLogo: FC = () => (
  <div className='header__logo'>
    <img src={paths.logo} alt='logo' />
    <span>CUT LINK</span>
  </div>
);

const Header: FC = () => {
  const [width, h] = useWindowSize();

  return (
    <header className='header'>
      <HeaderLogo/>
      {width > 992 ? <ExpandedMenu /> : <CollapsedMenu />}
      <IsAuth />
    </header>
  );
};

export default Header;
