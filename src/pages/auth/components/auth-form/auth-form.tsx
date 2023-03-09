import { ButtonForm } from '../button-form';
import { InputForm } from '../input-form';

import s from './auth-form.module.scss';

export const AuthForm = () => {
  const title = 'title';

  return (
    <form className={s.form}>
      <div className={s.form__box}>
        <div className={s.form__box_item}>
          <InputForm />
        </div>
        <div className={s.form__box_item}>
          <InputForm />
        </div>
      </div>
      <div className={s.form__button}>
        <ButtonForm />
      </div>
    </form>
  );
};
