import React, { FC } from 'react';
import { IPaginationLink } from '../../../types/propsTypes';
import { nanoid } from 'nanoid';

const PaginationLink: FC<IPaginationLink> = ({ page, num, changePage }) => {
  return (
    <a
      href="#"
      id={page === num ? 'active' : ''}
      onClick={(e) => {
        changePage(e, num);
      }}
      key={nanoid(4)}
    >
      {num}
    </a>
  );
};
export default PaginationLink;
