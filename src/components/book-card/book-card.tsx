import React from 'react';
import { NavLink } from 'react-router-dom';

import book_default from '../../assets/jpg/book_defualt.jpg';
import { BookingI } from '../../interface/book-i/book-i';
import { Paths } from '../../routing/routing';
import { getBookUrl, getDateTransformCard, getStars } from '../../utils/utils';
import { ButtonCard } from '../button-card';

import s from './book-card.module.scss';

interface BookCardI {
  view: 'GRID' | 'LIST';
  rating: number | null;
  title: string;
  authors: string[];
  image: {
    url: string;
  } | null;
  id: number;
  booking: BookingI | null;
  categories: string[];
}

export const BookCard = React.memo(({ id, title, authors, rating, image, booking, view, categories }: BookCardI) => {
  const showRating = (rate: number | null) => (
    <div className={s.rating}>
      {rate === null
        ? 'ещё нет оценок'
        : getStars(rate).map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <img key={i} className={s.rating__item} src={item} alt='star' />
          ))}
    </div>
  );

  let disabled = false;

  let titleBtn = 'Забронировать';

  let buttonType: 'Primary' | 'Secondary' = 'Secondary';

  if (booking) {
    if (booking.order) {
      titleBtn = getDateTransformCard(booking.dateOrder);
      disabled = true;
    }
  } else {
    buttonType = 'Primary';
  }

  // if (booking.order === 'open') {
  //   titleBtn = 'Забронировать';
  //   buttonType = 'Primary';
  // } else if (booking.status === 'complete') {
  //   titleBtn = 'Забронирована';
  // } else {
  // }

  const bookCardList = () => (
    <div className={s.listCard}>
      <img className={s.listCard__img} src={getBookUrl(image) || book_default} alt='book_image' />
      <div className={s.listCard__content}>
        <div className={s.listCard__header}>
          <div className={s.listCard__title}>{title}</div>
          <div className={s.listCard__authors}>{authors[0]}</div>
        </div>
        <div className={s.listCard__wrap}>
          {showRating(rating)}
          <div className={s.listCard__button}>
            <ButtonCard title={titleBtn} disabled={disabled} type={buttonType} />
          </div>
        </div>
      </div>
    </div>
  );

  const bookCardGrid = () => (
    <div className={s.gridCard}>
      <div className={s.gridCard__img}>
        <img src={getBookUrl(image) || book_default} alt='book_image' />
      </div>
      <div className={s.gridCard__rating}>{showRating(rating)}</div>
      <div className={s.gridCard__content}>
        <div className={s.gridCard__title}>{title}</div>
        <div className={s.gridCard__authors}>{authors[0]}</div>
      </div>
      <div className={s.gridCard__button}>
        <ButtonCard title={titleBtn} disabled={disabled} type={buttonType} />
      </div>
    </div>
  );

  return (
    <NavLink data-test-id='card' to={`${Paths.BOOKS}/${categories[0]}/${id}`}>
      {view === 'GRID' ? bookCardGrid() : bookCardList()}
    </NavLink>
  );
});
