import { useEffect } from 'react';

import { ModalError, Spinner } from '../components';
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
      {statusLoading === 'loading' ? <Spinner /> : ''}
      <div className={s.app__body}>
        <ModalError />
        <Routing />
      </div>
    </div>
  );
};
