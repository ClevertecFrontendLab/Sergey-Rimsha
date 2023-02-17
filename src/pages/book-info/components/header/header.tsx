import s from './header.module.scss';

interface HeaderI {
  bookName?: string;
  category?: string[];
}

export const Header = ({ bookName, category }: HeaderI) => (
  <div className={s.header}>
    <div className={s.container}>
      <div className={s.header__box}>
        <span className={s.header__item}>{category ? category[0] : ''}</span>
        <span className={s.header__item}>/</span>
        <span className={s.header__item}>{bookName}</span>
      </div>
    </div>
  </div>
);
