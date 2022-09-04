import info from '../../data/info';
import MyButton from '../UI/MyButton';
import React from 'react';

function MainInfo() {
  return (
    <div className='main__about'>
      <div className='main__title'>
        Добро пожаловать в <h1>cut link</h1>
      </div>
      <h3 className='main__subtitle'>{info.mainSubtitleInfo}</h3>
      <MyButton text='Зарегистрироваться' />
    </div>
  );
}

export function MainAbout() {
  return (
    <>
      <MainInfo />
    </>
  );
}
