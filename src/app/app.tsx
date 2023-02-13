import React from 'react';

import { FooterPage, HeaderPage } from '../pages';
import { Routing } from '../routing';

import s from './app.module.scss';

export const App = () => (
  <div className={s.app}>
    <div className={s.app__body}>
      <HeaderPage />
      <Routing />
    </div>
    <FooterPage />
  </div>
);
