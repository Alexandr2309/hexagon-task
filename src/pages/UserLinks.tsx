import React, { FC } from 'react';
import { LinksTable } from '../components/LinksTable/LinksTable';



const UserLinks: FC = () => {
  return (
    <main className='links'>
      <div className='links__wrapper'>
        <h5 className='links__title'>Статистика посещений ссылок</h5>
        <LinksTable />
      </div>
    </main>
  );
};

export default UserLinks;
