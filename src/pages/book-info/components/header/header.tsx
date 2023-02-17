import { useAppSelector } from '../../../../hooks';
import { CategoriesI } from '../../../../interface';

import s from './header.module.scss';

interface HeaderI {
  bookName?: string;
  category?: string;
}

export const Header = ({ bookName, category }: HeaderI) => {
  const categories = useAppSelector<CategoriesI[]>((state) => state.app.categories);

  const pathName = categories.find((el) => el.path === category);

  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.header__box}>
          <span className={s.header__item}>{pathName?.name || 'Все книги'}</span>
          <span className={s.header__item}>/</span>
          <span className={s.header__item}>{bookName}</span>
        </div>
      </div>
    </div>
  );
};
