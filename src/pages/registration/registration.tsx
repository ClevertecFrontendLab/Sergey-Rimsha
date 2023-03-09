import { NavLink } from 'react-router-dom';

import chevron from '../../assets/icon/icon_chevron.svg';
import { ButtonForm, InputForm } from '../../components';
import { Paths } from '../../enum';

import s from './registration.module.scss';

export const Registration = () => {
  const title = 'sd';

  return (
    <section className={s.login}>
      <div className={s.container}>
        <div className={s.login__title}>Cleverland</div>
        <div className={s.registration}>
          <div className={s.registration__header}>
            <div className={s.registration__title}>Регистрация</div>
            <div className={s.registration__crumbs}>1 шаг из 3</div>
          </div>
          <form className={s.form}>
            <div className={s.form__box}>
              <div className={s.form__box_item}>
                <InputForm type='text' label='Придумайте логин для входа' validate={false} />
              </div>
              <div className={s.form__box_item}>
                <InputForm type='password' label='Пароль' validate={false} />
              </div>
            </div>
            <div className={s.form__button}>
              <ButtonForm title='следующий шаг' />
            </div>
          </form>
          <div className={s.registration__footer}>
            <span className={s.registration__description}>Есть учётная запись?</span>
            <NavLink to={Paths.AUTH}>
              <div className={s.registration__login}>
                <span>войти</span>
                <img src={chevron} alt='chevron' />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
