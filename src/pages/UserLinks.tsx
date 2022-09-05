import React, { FC, useEffect } from 'react';
import { LinksTable } from '../components/LinksTable/LinksTable';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getCookie } from '../utils/helperFuns';
import { getStatistics } from '../api/request';
import Loader from '../components/UI/Loader';

const UserLinks: FC = () => {
  const links = useAppSelector((state) => state.user.links);
  const isLoading = useAppSelector((state) => state.progress.isLoading);
  const dispatch = useAppDispatch();

  const isAuth = getCookie('token');
  const na = useNavigate();

  useEffect(() => {
    if (links.length === 0) {
      getStatistics(dispatch, true);
    }
  }, []);

  if (isAuth === '') {
    return <Navigate to="/login" replace />;
  }

  return (
    <main className="links">
      <div className="links__wrapper">
        <h5 className="links__title">Статистика посещений ссылок</h5>
        {isLoading ? <Loader /> : <LinksTable />}
      </div>
    </main>
  );
};

export default UserLinks;
