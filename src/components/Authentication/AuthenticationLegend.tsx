import React from 'react';
import { Link } from 'react-router-dom';

export function AuthenticationLegend(props: { path: 'register' | 'login' }) {
  return (
    <legend className="auth__title">
      <span className={props.path === 'register' ? 'active' : ''}>
        <Link to="/register">Зарегистрироваться</Link>
      </span>
      &nbsp;/&nbsp;
      <span className={props.path === 'login' ? 'active' : ''}>
        <Link to="/login">Войти</Link>
      </span>
    </legend>
  );
}
