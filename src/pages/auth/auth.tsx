import s from './auth.module.scss';

export const Auth = () => {
  const title = '';

  return (
    <section className={s.auth}>
      <div className={s.container}>
        <div className={s.auth__title}>Cleverland</div>
        <form className={s.form}>
          <div className={s.form__title}>Регистрация</div>
          <div className={s.form__crumbs}>1 шаг из 3</div>
          <div className={s.form__item}>
            <input />
          </div>
          <div className={s.form__item}>
            <input />
          </div>
          <div className={s.form__item}>
            <button className={s.button} type='button'>
              button
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
