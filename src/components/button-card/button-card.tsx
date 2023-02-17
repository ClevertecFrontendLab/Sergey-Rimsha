import s from './button-card.module.scss';

interface ButtonCardI {
  title: string;
  disabled: boolean;
  type: 'Primary' | 'Secondary';
}

export const ButtonCard = ({ disabled, type, title }: ButtonCardI) => {
  let style = '';

  switch (type) {
    case 'Secondary':
      style = s.box__secondary;
      break;
    case 'Primary':
      style = s.box__primary;
      break;
    default:
      style = s.box__secondary;
  }

  return (
    <div className={s.box}>
      <button className={`${s.box__button} ${style}`} disabled={disabled} type='submit'>
        {title}
      </button>
    </div>
  );
};
