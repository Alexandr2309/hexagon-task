import React, { FC, useMemo } from 'react';
import { setState } from '../../../types/propsTypes';
import PaginationLink from './PaginationLink';
import { useAppSelector } from '../../../app/hooks';
import { nanoid } from 'nanoid';

const Pagination: React.FC<{ page: number; setPage: setState<number> }> = ({
  page,
  setPage,
}) => {
  const links = useAppSelector((state) => state.user.links);

  const pageCount = Math.ceil(links.length / 7);

  if (pageCount === 1) return <></>;

  const changePage = (e: React.MouseEvent<HTMLAnchorElement>, num: number) => {
    e.preventDefault();
    setPage(num);
  };

  return (
    <div className="table-pagination">
      {Array.from({ length: pageCount }, (e, i) => i + 1).map((num) => (
        <PaginationLink
          page={page}
          num={num}
          changePage={changePage}
          key={nanoid(3)}
        />
      ))}
    </div>
  );
};

export default Pagination;
