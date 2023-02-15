import { Spinner } from '../components/spinner/spinner';
import { useAppSelector } from '../hooks/hooks';
import { FooterPage, HeaderPage } from '../pages';
import { Routing } from '../routing';

import s from './app.module.scss';

export const App = () => {
  const statusLoading = useAppSelector((state) => state.app.statusLoading);

  return (
    <div className={s.app}>
      {statusLoading === 'loading' ? <Spinner /> : ''}
      <div className={s.app__body}>
        <HeaderPage />
        <Routing />
      </div>
      <FooterPage />
    </div>
  );
};
