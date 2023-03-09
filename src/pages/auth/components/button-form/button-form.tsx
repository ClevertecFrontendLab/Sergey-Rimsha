import s from './button-form.module.scss';

export const ButtonForm = () => {
  const propsType = 'button';
  const propsDisabled = false;

  return (
    <div className={s.group}>
      <button className={s.group__button} disabled={propsDisabled} type='button'>
        следующий шаг
      </button>
    </div>
  );
};
