import React from 'react';
import { useAppSelector } from '../../app/hooks';

function TableHead() {
  return (
    <tr>
      <th>URL-сслыка</th>
      <th>Сокращенная ссылка</th>
      <th>Количество посещений</th>
    </tr>
  );
}

export function LinksTable() {
  const links = useAppSelector(state => state.user.links);
  if(links.length === 0) {
    return <h2>У вас пока нет активных ссылок</h2>
  }

  return (
    <table className='links__table table-links'>
      <TableHead />
    </table>
  );
}
