import React, { FC } from 'react';
import MyButton from '../UI/MyButton';
import { useLocation } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { AuthenticationInputs } from './AuthenticationInputs';
import { AuthenticationLegend } from './AuthenticationLegend';
import { authRole } from '../../types/propsTypes';
import { useAppDispatch } from '../../app/hooks';
import { registration, login } from '../../api/request';

const Authentication: FC<{ role: authRole }> = ({ role }) => {
  const username = useInput();
  const password = useInput();

  const params = useLocation();
  const dispatch = useAppDispatch();
  const path: authRole = params.pathname.includes('register')
    ? 'register'
    : 'login';
  const textBtn = path === 'register' ? 'Зарегистрироваться' : 'Войти';

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (path === 'register') {
      registration(username.value, password.value, dispatch);
    } else {
      login(username.value, password.value, dispatch);
    }
  };

  return (
    <div className="auth">
      <div className="auth__wrapper form-wrap">
        <form
          action="#"
          className="auth__form"
          name="auth"
          onSubmit={onSubmitHandler}
        >
          <AuthenticationLegend path={path} />
          <AuthenticationInputs
            username={username}
            password={password}
            role={role}
          />
          <div className="auth__submit">
            <MyButton text={textBtn} type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Authentication;
