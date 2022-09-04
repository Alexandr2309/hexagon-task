import React, { FC } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';



const Layout: FC = () => {
  return (
    <div className='container'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
