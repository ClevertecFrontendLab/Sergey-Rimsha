import s from './button-form.module.scss';

interface ButtonFormPropsI {
  title: string;
}

export const ButtonForm = ({ title }: ButtonFormPropsI) => {
  const propsType = 'button';
  const propsDisabled = false;

  return (
    <div className={s.group}>
      <button className={s.group__button} disabled={propsDisabled} type='button'>
        {title}
      </button>
    </div>
  );
};
