import React, { FC, useState } from 'react';
import paths from '../../utils/path';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { Button, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandedMenu from './ExpandedMenu';
import { deleteCookie } from '../../utils/helperFuns';
import { changeAuth } from '../../features/user/userSlice';

const LogInBtn = () => {
  const redirect = useNavigate();
  const onClickHandler = () => {
    redirect('/login');
  };

  return (
    <button className="header__login" onClick={onClickHandler}>
      Войти
    </button>
  );
};

function ProfileExit(props: { username: any }) {
  const dispatch = useAppDispatch();
  const na = useNavigate();

  const clearCookie = () => {
    ['password', 'username', 'token'].forEach((item) => {
      deleteCookie(item);
    });
  };

  const onExitHandler = () => {
    clearCookie();
    dispatch(changeAuth({ auth: false, username: '' }));
    na('/');
  };

  return (
    <div className="header__leave">
      <h3>Пользователь: {props.username}</h3>
      <button onClick={onExitHandler}>Выйти</button>
    </div>
  );
}

const IsAuth: FC = () => {
  const { isAuth, username } = useAppSelector((state) => state.user);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isAuth === false) {
    return <LogInBtn />;
  }

  return (
    <div className="header__profile">
      <div className="header__avatar">
        <img src={paths.avatar} alt="аватарка" />
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <img src={paths.triangle} alt="треугольник" />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <ProfileExit username={username} />
        </Menu>
      </div>
    </div>
  );
};

export default IsAuth;
