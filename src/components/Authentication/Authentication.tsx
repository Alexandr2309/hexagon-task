import React, { FC, useState } from 'react';
import MyButton from '../UI/MyButton';
import { useLocation, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { AuthenticationInputs } from './AuthenticationInputs';
import { AuthenticationLegend } from './AuthenticationLegend';
import { authRole } from '../../types/propsTypes';
import { useAppDispatch } from '../../app/hooks';
import { registration, login, getStatistics } from '../../api/request';
import Modal from '../UI/Modal';
import info from '../../data/info';

const Authentication: FC<{ role: authRole }> = ({ role }) => {
  const [modal, setModal] = useState<boolean>(false);
  const username = useInput();
  const password = useInput();

  const params = useLocation();
  const na = useNavigate();
  const dispatch = useAppDispatch();

  const path: authRole = params.pathname.includes('register')
    ? 'register'
    : 'login';
  const textBtn = path === 'register' ? 'Зарегистрироваться' : 'Войти';

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (path === 'register') {
      if (!username.value || !password.value)
        return alert('Необходимо заполнить все поля!');
      await registration(username.value, password.value, dispatch);
      setModal(true);
    } else {
      if (!username.value || !password.value)
        return alert('Необходимо заполнить все поля!');
      await login(username.value, password.value, dispatch);
      getStatistics(dispatch);
      na('/');
    }
  };

  return (
    <>
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
      <Modal
        open={modal}
        setOpen={setModal}
        text={{ content: info.successReg, extra: 'Перейти' }}
        additionalAction={() => na('/login')}
      />
    </>
  );
};

export default Authentication;
