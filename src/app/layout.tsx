import { Outlet } from 'react-router-dom';

import { Menu } from '../components';
import { FooterPage, HeaderPage } from '../pages';

import s from './layout.module.scss';

export const Layout = () => (
  <div className={s.layout}>
    <HeaderPage />
    <div className={s.container}>
      <Menu menuId='navigation' />
      <Outlet />
    </div>
    <FooterPage />
  </div>
);
