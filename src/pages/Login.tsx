import React, { FC } from 'react';
import HeaderLayout from '../components/Layout/HeaderLayout';
import Authentication from '../components/Authentication/Authentication';

const Login: FC = () => {
  return (
    <HeaderLayout>
      <Authentication role="login" />
    </HeaderLayout>
  );
};

export default Login;
