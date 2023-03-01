import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { ModalError, Spinner } from '../components';
import { Paths } from '../enum';
import { useAppDispatch, useAppSelector } from '../hooks';
import { Routing } from '../routing';
import { getCategoriesTC } from '../thunks';

import s from './app.module.scss';

export const App = () => {
  const dispatch = useAppDispatch();
  const statusLoading = useAppSelector((state) => state.app.statusLoading);

  useEffect(() => {
    dispatch(getCategoriesTC());
  }, [dispatch]);

  return (
    <div className={s.app}>
      <div>
        <NavLink to={`${Paths.AUTH}${Paths.REGISTRATION}`}>REGISTRATION</NavLink>
        <span>{' / '}</span>
        <NavLink to='/'>home</NavLink>
      </div>
      {statusLoading === 'loading' ? <Spinner /> : ''}
      <div className={s.app__body}>
        <ModalError />
        <Routing />
      </div>
    </div>
  );
};
