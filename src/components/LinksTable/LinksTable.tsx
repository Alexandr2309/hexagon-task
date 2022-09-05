import React, { useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { TableHead } from './TableHead';
import MainTable from './MainTable';
import Pagination from '../UI/Pagination/Pagination';

export function LinksTable() {
  const links = useAppSelector((state) => state.user.links);
  const [page, setPage] = useState<number>(1);

  if (links.length === 0) {
    return <h2>У вас пока нет активных ссылок</h2>;
  }

  return (
    <>
      <table className="links__table table-links">
        <TableHead />
        <MainTable page={page} />
      </table>
      <Pagination page={page} setPage={setPage} />
    </>
  );
}
