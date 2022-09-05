import info from '../../data/info';
import MyButton from '../UI/MyButton';
import React from 'react';
import { Link } from 'react-router-dom';

function MainTitle() {
  return (
    <div className="main__title">
      Добро пожаловать в <h1>cut link</h1>
    </div>
  );
}

function MainInfo() {
  return (
    <div className="main__about">
      <MainTitle />
      <h3 className="main__subtitle">{info.mainSubtitleInfo}</h3>
      <Link to="/register">
        <MyButton text="Зарегистрироваться" />
      </Link>
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
