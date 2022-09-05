import React, { FC, Fragment, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getStatistics } from '../../api/request';
import { TableRow } from './TableRow';

const MainTable: FC = () => {
  const links = useAppSelector((state) => state.user.links);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (links.length !== 0) {
      getStatistics(dispatch, true);
    }
  }, []);

  return (
    <>
      {links.map((link) => (
        <TableRow link={link} key={link.id} />
      ))}
    </>
  );
};

export default MainTable;
