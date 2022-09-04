import React, { FC } from 'react';
import Authentication from '../components/Authentication/Authentication';
import HeaderLayout from '../components/Layout/HeaderLayout';

const Register: FC = () => {
  return (
    <HeaderLayout>
      <Authentication role="register"/>
    </HeaderLayout>
  );
};

export default Register;
