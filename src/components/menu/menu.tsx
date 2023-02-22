import { memo, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { Paths } from '../../enum';
import { useAppSelector } from '../../hooks';
import { CategoriesI } from '../../interface';

import s from './menu.module.scss';

interface MenuI {
  menuId: 'navigation' | 'burger';
}

export const Menu = memo(({ menuId }: MenuI) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [selectMenuShow, setSelectMenuShow] = useState<boolean>(true);
  const categories = useAppSelector<CategoriesI[]>((state) => state.app.categories);

  const clickMenuRef = useRef<HTMLDivElement>(null);

  const onClickHandlerMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const onClickSubTitle = () => {
    setShowMenu((prevState) => !prevState);
  };

  const styleSubLink = ({ isActive }: { isActive: boolean }) =>
    classNames(`${s.nav__subLink}`, { [`${s.nav__subLink_active}`]: isActive });
  const styleLink = ({ isActive }: { isActive: boolean }) =>
    classNames(`${s.link__title}`, { [`${s.link__title_active}`]: isActive });

  const onClickHandlerSelectMenu = () => {
    setSelectMenuShow((prevState) => !prevState);
  };

  useEffect(() => {
    if (!showMenu) return;

    const onHandlerClick = (e: Event) => {
      if (!clickMenuRef.current) return;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (!clickMenuRef.current.contains(e.target)) {
        onClickHandlerMenu();
      }
    };

    document.addEventListener('click', onHandlerClick);

    // eslint-disable-next-line consistent-return
    return () => document.removeEventListener('click', onHandlerClick);
  }, [showMenu]);

  const styleTitle = ({ isActive }: { isActive: boolean }) =>
    classNames(
      `${s.nav__title}`,
      { [`${s.nav__title_active}`]: isActive },
      { [`${s.nav__title_show}`]: selectMenuShow }
    );

  const sidebarMenu = () => (
    <nav className={classNames(`${s.nav}`, { [`${s.sidebar}`]: menuId === 'navigation' })}>
      <button
        className={s.nav__button}
        data-test-id={`${menuId}-showcase`}
        onClick={onClickHandlerSelectMenu}
        type='button'>
        <NavLink className={styleTitle} to='/books'>
          <div>Витрина книг</div>
          <div>{}</div>
        </NavLink>
      </button>
      <div className={classNames(`${s.nav__links}`, { [`${s.nav__links_show}`]: selectMenuShow })}>
        <div className={s.link}>
          <NavLink
            data-test-id={`${menuId}-books`}
            onClick={onClickHandlerMenu}
            className={styleLink}
            to={`${Paths.BOOKS}/all`}>
            Все книги
          </NavLink>
          {categories.map((item) => (
            <NavLink
              onClick={onClickHandlerMenu}
              className={styleLink}
              key={item.id}
              to={`${Paths.BOOKS}/${item.path}`}>
              <span data-test-id={`${menuId}-${item.path}`} className={s.link__title}>
                {item.name}
              </span>
              <span data-test-id={`${menuId}-book-count-for-${item.path}`} className={s.link__value}>
                {item.value}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
      <NavLink data-test-id={`${menuId}-terms`} onClick={onClickSubTitle} className={styleSubLink} to={Paths.TERMS}>
        Правила пользования
      </NavLink>
      <NavLink
        data-test-id={`${menuId}-contract`}
        onClick={onClickSubTitle}
        className={styleSubLink}
        to={Paths.CONTRACT}>
        Договор оферты
      </NavLink>
    </nav>
  );

  const burgerMenu = () => (
    <div ref={clickMenuRef} className={s.menu}>
      <button
        data-test-id='button-burger'
        className={classNames(`${s.menu__button}`, { [`${s.menu__button_active}`]: showMenu })}
        onClick={onClickHandlerMenu}
        type='button'>
        <span className={s.menu__first}>{}</span>
        <span className={s.menu__second}>{}</span>
        <span className={s.menu__third}>{}</span>
      </button>
      <div className={s.container}>
        <div
          data-test-id='burger-navigation'
          className={classNames(`${s.menu__content}`, { [`${s.menu__content_show}`]: showMenu })}>
          <div className={s.menu__box}>{sidebarMenu()}</div>
          <div className={s.footer}>
            <div className={s.footer__item}>Профиль</div>
            <div className={s.footer__item}>Выход</div>
          </div>
        </div>
      </div>
    </div>
  );

  return menuId === 'navigation' ? sidebarMenu() : burgerMenu();
});
