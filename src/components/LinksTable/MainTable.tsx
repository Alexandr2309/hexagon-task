import React, { FC, useMemo } from 'react';
import { useAppSelector } from '../../app/hooks';
import { TableRow } from './TableRow';

const MainTable: FC<{page: number}> = ({page}) => {
  const links = useAppSelector((state) => state.user.links);

  const linksPortion = useMemo(() => {
    if(page === 1) return links.slice(0, 7);

    return links.slice((page - 1) * 7, (page - 1) * 7 * 2);
  }, [page]);

  return (
    <tbody>
      {linksPortion.map((link) => (
        <TableRow link={link} key={link.id} />
      ))}
    </tbody>
  );
};

export default MainTable;
