import { Outlet } from 'react-router-dom';

import s from './auth.module.scss';

export const Auth = () => {
  const title = '';

  return (
    <section className={s.auth}>
      <div className={s.container}>
        <div className={s.auth__title}>Cleverland</div>
        <Outlet />
      </div>
    </section>
  );
};
