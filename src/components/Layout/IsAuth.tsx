import React, { FC } from 'react';
import paths from '../../utils/path';
import { useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';

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

const IsAuth: FC = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth);

  if (isAuth === false) {
    return <LogInBtn />;
  }

  return (
    <div className="header__profile">
      <div className="header__avatar">
        <img src={paths.avatar} alt="аватарка" />
        <img src={paths.triangle} alt="треугольник" />
      </div>
    </div>
  );
};

export default IsAuth;
