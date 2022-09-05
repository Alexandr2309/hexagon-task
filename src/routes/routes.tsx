import MainPage from '../pages/MainPage';
import UserLinks from '../pages/UserLinks';
import React from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Register from '../pages/Register';
import Login from '../pages/Login';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { element: <MainPage />, index: true },
      { path: 'links', element: <UserLinks /> },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
];

const RoutesPath = () => {
  const element: React.ReactElement | null = useRoutes(routes);

  return element;
};
export default RoutesPath;
