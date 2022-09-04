import React, { FC } from 'react';
import { IAuthenticationField } from '../../types/propsTypes';

export const AuthenticationField: FC<IAuthenticationField> = ({
  text,
  value,
  onChange,
  role = 'text',
}) => {
  return (
    <div className="auth__field">
      <label htmlFor="username">{text}</label>
      <input type={role} id="username" {...{ value, onChange }} />
    </div>
  );
};
