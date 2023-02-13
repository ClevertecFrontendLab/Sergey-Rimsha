import { Outlet } from 'react-router-dom';

import { Menu } from '../components/menu';

import s from './layout.module.scss';

export const Layout = () => (
  <div className={s.layout}>
    <div className={s.container}>
      {/* <NavPage pageType='sidebar' /> */}
      <Menu menuType='sidebar' />
      <Outlet />
    </div>
  </div>
);
