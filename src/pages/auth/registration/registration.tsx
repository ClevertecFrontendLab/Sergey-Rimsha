import chevron from '../../../assets/icon/icon_chevron.svg';
import { AuthForm } from '../components';

import s from './registration.module.scss';

export const Registration = () => {
  const title = '';

  return (
    <div className={s.registration}>
      <div className={s.registration__header}>
        <div className={s.registration__title}>Регистрация</div>
        <div className={s.registration__crumbs}>1 шаг из 3</div>
      </div>

      <AuthForm />

      <div className={s.registration__footer}>
        <span className={s.registration__description}>Есть учётная запись?</span>
        <div className={s.registration__login}>
          <span>войти</span>
          <img src={chevron} alt='chevron' />
        </div>
      </div>
    </div>
  );
};
