import React, { FC } from 'react';
import { MainAbout } from '../components/About/MainAbout';
import LinkTranslator from '../components/Translator/LinkTranslator';

const MainPage: FC = () => {
  return (
    <div className='main'>
      <MainAbout />
      <LinkTranslator/>
    </div>
  );
};

export default MainPage;
