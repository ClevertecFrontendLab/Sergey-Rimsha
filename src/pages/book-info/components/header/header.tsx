import s from './header.module.scss';

interface HeaderI {
  bookName: string | undefined;
}

export const Header = ({ bookName }: HeaderI) => (
  <div className={s.header}>
    <div className={s.container}>
      <div className={s.header__box}>
        <span className={s.header__item}>Бизнес книги</span>
        <span className={s.header__item}>/</span>
        <span className={s.header__item}>{bookName}</span>
      </div>
    </div>
  </div>
);
