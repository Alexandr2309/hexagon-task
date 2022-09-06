import MainPage from '../pages/MainPage';
import UserLinks from '../pages/UserLinks';
import React from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Register from '../pages/Register';
import Login from '../pages/Login';
import { RoutesPaths } from '../types/commonTypes';

export const routes: RouteObject[] = [
  {
    path: RoutesPaths.main,
    element: <Layout />,
    children: [
      { element: <MainPage />, index: true },
      { path: RoutesPaths.links, element: <UserLinks /> },
    ],
  },
  {
    path: RoutesPaths.register,
    element: <Register />,
  },
  {
    path: RoutesPaths.login,
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
