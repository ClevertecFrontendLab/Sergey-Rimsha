import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import { setBooksSearch, setBooksSortRating } from '../../actions';
import i_filter from '../../assets/icon/icon_filter_lg.svg';
import i_filter_revers from '../../assets/icon/icon_filter_revers.svg';
import icon_grid from '../../assets/icon/icon_grid.svg';
import icon_grid_active from '../../assets/icon/icon_grid_active.svg';
import icon_list from '../../assets/icon/icon_list.svg';
import icon_list_active from '../../assets/icon/icon_list_active.svg';
import { BookCard, InputSearch } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { BooksStateI, CategoriesI } from '../../interface';
import { getBooksTC } from '../../thunks';

import s from './main-page.module.scss';

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { category } = useParams();
  const { items, sort, search } = useAppSelector<BooksStateI>((state) => state.books);
  const categories = useAppSelector<CategoriesI[]>((state) => state.app.categories);

  const [viewCards, setViewCards] = useState<'GRID' | 'LIST'>('GRID');

  const contentView = classNames({
    [`${s.main__content_grid}`]: viewCards === 'GRID',
    [`${s.main__content_list}`]: viewCards === 'LIST',
  });

  let books = items;

  const filter = categories.find((el) => el.path === category);

  if (filter) {
    books = items.filter((book) => book.categories.find((name) => name === filter.name));
  }
  if (search) {
    books = books.filter((item) => {
      const matchValue = search.toLowerCase();

      return item.title.toLowerCase().includes(matchValue);
    });
  }

  const onClickView = () => {
    setViewCards((prevState) => (prevState === 'GRID' ? 'LIST' : 'GRID'));
  };

  const onClickHandlerSortRating = () => {
    dispatch(setBooksSortRating(!sort));
  };

  const onChangeSearchInput = (text: string) => {
    dispatch(setBooksSearch(text));
  };

  const emptyDataText = () => {
    if (search.length >= 1) {
      return (
        <div className={s.main__message} data-test-id='search-result-not-found'>
          ???? ?????????????? ???????????? ???? ??????????????
        </div>
      );
    }

    return (
      <div className={s.main__message} data-test-id='empty-category'>
        ?? ???????? ?????????????????? ???????? ?????? ??????
      </div>
    );
  };

  useEffect(() => {
    dispatch(getBooksTC());
  }, [dispatch]);

  return (
    <section className={s.main}>
      <div className={s.main__header}>
        <form className={s.from}>
          <InputSearch search={search} onChangeSearchInput={onChangeSearchInput} />
          <div data-test-id='sort-rating-button' className={s.from__filter}>
            <button onClick={onClickHandlerSortRating} type='button'>
              <img src={sort ? i_filter : i_filter_revers} alt='sort' />
              <span>???? ????????????????</span>
            </button>
          </div>
        </form>
        <div className={s.menu}>
          <button
            className={classNames(s.menu__item, { [`${s.menu__item_active}`]: viewCards === 'GRID' })}
            type='button'
            onClick={onClickView}
            data-test-id='button-menu-view-window'>
            <img src={viewCards === 'GRID' ? icon_grid_active : icon_grid} alt='grid' />
          </button>
          <button
            className={classNames(s.menu__item, { [`${s.menu__item_active}`]: viewCards === 'LIST' })}
            type='button'
            onClick={onClickView}
            data-test-id='button-menu-view-list'>
            <img src={viewCards === 'LIST' ? icon_list_active : icon_list} alt='table' />
          </button>
        </div>
      </div>
      <div className={classNames(s.main__content, { [`${contentView}`]: books.length >= 1 })}>
        {books.length >= 1
          ? books.map((card) => (
              <BookCard
                key={card.id}
                id={card.id}
                view={viewCards}
                authors={card.authors}
                title={card.title}
                booking={card.booking}
                image={card.image}
                rating={card.rating}
                search={search}
              />
            ))
          : emptyDataText()}
      </div>
    </section>
  );
};
