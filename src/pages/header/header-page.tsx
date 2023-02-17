import { NavLink } from 'react-router-dom';

import avatar from '../../assets/png/avatar.png';
import logo from '../../assets/svg/logo.svg';
import logo_title from '../../assets/svg/logo_title.svg';
import { Menu } from '../../components';

import s from './header-page.module.scss';

export const HeaderPage = () => (
  <header className={s.header}>
    <div className={s.container}>
      <NavLink to='/'>
        <div className={`${s.header__logo} ${s.logo}`}>
          <div className={s.logo__main}>
            <img src={logo} alt='logo' />
          </div>
          <div className={s.logo__title}>
            <img src={logo_title} alt='title' />
          </div>
        </div>
      </NavLink>
      <div className={s.header__content}>
        <Menu menuType='burger' />
        <div className={s.header__title}>Библиотека</div>
        <div className={`${s.header__login} ${s.login}`}>
          <div className={s.login__title}>Привет, Иван!</div>
          <div className={s.login__avatar}>
            <img src={avatar} alt='avatar' />
          </div>
        </div>
      </div>
    </div>
  </header>
);
