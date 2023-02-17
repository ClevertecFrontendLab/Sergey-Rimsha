import { Outlet } from 'react-router-dom';

import { Menu } from '../components';

import s from './layout.module.scss';

export const Layout = () => (
  <div className={s.layout}>
    <div className={s.container}>
      <Menu menuType='sidebar' />
      <Outlet />
    </div>
  </div>
);
