import { AuthenticationField } from './AuthenticationField';
import React from 'react';
import { IAuthenticationInputs } from '../../types/propsTypes';

export function AuthenticationInputs({
  username,
  password,
  role,
}: IAuthenticationInputs) {
  const text = role === 'login' ? 'Введите пароль' : 'Придумайте пароль';

  return (
    <>
      <AuthenticationField text="Введите имя пользователя" {...username} />
      <AuthenticationField text={text} {...password} role="password" />
    </>
  );
}
