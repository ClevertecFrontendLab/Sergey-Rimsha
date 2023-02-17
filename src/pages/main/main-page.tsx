import { useEffect, useState } from 'react';

import icon_filter from '../../assets/icon/icon_filter_lg.svg';
import icon_grid from '../../assets/icon/icon_grid.svg';
import icon_grid_active from '../../assets/icon/icon_grid_active.svg';
import icon_list from '../../assets/icon/icon_list.svg';
import icon_list_active from '../../assets/icon/icon_list_active.svg';
import { BookCard, InputSearch } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getBooksTC } from '../../thunks';

import s from './main-page.module.scss';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const [viewCards, setViewCards] = useState<'GRID' | 'LIST'>('GRID');
  const [styleViewGrid, setStyleViewGrid] = useState(`${s.menu__item} ${s.menu__item_active}`);
  const [styleViewList, setStyleViewList] = useState(`${s.menu__item}`);

  const [contentView, setContentView] = useState(`${s.main__content_grid}`);

  const items = useAppSelector((state) => state.books.items);

  const onClickView = () => {
    setViewCards((prevState) => (prevState === 'GRID' ? 'LIST' : 'GRID'));
  };

  useEffect(() => {
    const styleActive = `${s.menu__item} ${s.menu__item_active}`;
    const styleDefault = `${s.menu__item}`;

    if (viewCards === 'GRID') {
      setStyleViewGrid(styleActive);
      setStyleViewList(styleDefault);
      setContentView(`${s.main__content_grid}`);
    } else if (viewCards === 'LIST') {
      setStyleViewList(styleActive);
      setStyleViewGrid(styleDefault);
      setContentView(`${s.main__content_list}`);
    }
  }, [viewCards]);

  useEffect(() => {
    dispatch(getBooksTC());
  }, [dispatch]);

  return (
    <section className={s.main}>
      <div className={s.main__header}>
        <form className={s.from}>
          <InputSearch />
          <div className={s.from__filter}>
            <button type='button'>
              <img src={icon_filter} alt='sort' />
              <span>По рейтингу</span>
            </button>
          </div>
        </form>
        <div className={s.menu}>
          <button className={styleViewGrid} type='button' onClick={onClickView} data-test-id='button-menu-view-window'>
            <img src={viewCards === 'GRID' ? icon_grid_active : icon_grid} alt='grid' />
          </button>
          <button className={styleViewList} type='button' onClick={onClickView} data-test-id='button-menu-view-list'>
            <img src={viewCards === 'LIST' ? icon_list_active : icon_list} alt='table' />
          </button>
        </div>
      </div>
      <div className={`${s.main__content} ${contentView}`}>
        {items.map((card) => (
          <BookCard
            key={card.id}
            id={card.id}
            view={viewCards}
            authors={card.authors}
            title={card.title}
            booking={card.booking}
            image={card.image}
            rating={card.rating}
          />
        ))}
      </div>
    </section>
  );
};
