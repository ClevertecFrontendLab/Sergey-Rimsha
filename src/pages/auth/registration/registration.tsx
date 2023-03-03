import { ButtonForm, InputForm } from '../../../components';

import s from './registration.module.scss';

export const Registration = () => {
  const title = '';

  return (
    <form className={s.form}>
      <div className={s.form__title}>Регистрация</div>
      <div className={s.form__crumbs}>1 шаг из 3</div>
      <div className={s.form__item}>
        <InputForm />
      </div>
      <div className={s.form__item}>
        <InputForm />
      </div>
      <div className={s.form__item}>
        <ButtonForm />
      </div>
    </form>
  );
};
