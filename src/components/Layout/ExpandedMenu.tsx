import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const ExpandedMenu: FC = () => {
  return (
    <>
      <nav className='header__nav nav-header'>
        <Link to='/'>Главная</Link>
        <Link to='/'>О сервисе</Link>
        <Link to='/links'>Мои ссылки</Link>
        <Link to='/'>Контакты</Link>
      </nav>
    </>
  );
};

export default ExpandedMenu;
