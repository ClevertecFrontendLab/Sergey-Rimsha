import * as Path from 'path';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import chevron from '../../assets/icon/icon_chevron.svg';
import { ButtonForm, InputForm, ModalForm } from '../../components';
import { Paths } from '../../enum';

import s from './auth.module.scss';

export const Auth = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <section className={s.auth}>
      <div className={s.container}>
        <div className={s.auth__title}>Cleverland</div>
        {showModal ? (
          <ModalForm />
        ) : (
          <div className={s.login}>
            <div className={s.login__title}>Вход в личный кабинет</div>
            <form className={s.form}>
              <div className={s.form__box}>
                <div className={s.form__box_item}>
                  <InputForm type='text' label='Логин' validate={false} />
                </div>
                <div className={s.form__box_item}>
                  <InputForm type='password' label='Пароль' validate={false} />
                </div>
              </div>
              <div className={s.form__button}>
                <ButtonForm title='вход' />
              </div>
            </form>
            <div className={s.login__footer}>
              <span className={s.login__description}>Нет учётной записи?</span>
              <NavLink to={Paths.REGISTRATION}>
                <div className={s.login__login}>
                  <span>Регистрация</span>
                  <img src={chevron} alt='chevron' />
                </div>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
