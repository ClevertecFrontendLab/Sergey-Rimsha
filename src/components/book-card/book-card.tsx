import React from 'react';
import { NavLink } from 'react-router-dom';

import book_default from '../../assets/jpg/book_defualt.jpg';
import { CardI } from '../../pages/main/main-page';
import { Paths } from '../../routing/routing';
import { getStars } from '../../utils/utils';
import { ButtonCard } from '../button-card';

import s from './book-card.module.scss';

interface BookCardI extends CardI {
  view: 'GRID' | 'LIST';
}

export const BookCard = React.memo(({ id, title, description, rating, image, booking, view }: BookCardI) => {
  const showRating = (rate: number) => (
    <div className={s.rating}>
      {rate === 0
        ? 'ещё нет оценок'
        : getStars(rate).map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <img key={i} className={s.rating__item} src={item} alt='star' />
          ))}
    </div>
  );

  let disabled = false;

  let titleBtn = booking.message;

  let buttonType: 'Primary' | 'Secondary' = 'Secondary';

  if (booking.status === 'open') {
    titleBtn = 'Забронировать';
    buttonType = 'Primary';
  } else if (booking.status === 'complete') {
    titleBtn = 'Забронирована';
  } else {
    disabled = true;
  }

  const bookCardList = () => (
    <div className={s.listCard}>
      <div className={s.listCard__img}>
        <img src={image[0] || book_default} alt='book_image' />
      </div>
      <div className={s.listCard__content}>
        <div className={s.listCard__header}>
          <div className={s.listCard__title}>{title}</div>
          <div className={s.listCard__description}>{description}</div>
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
        <img src={image[0] || book_default} alt='book_image' />
      </div>
      <div className={s.gridCard__rating}>{showRating(rating)}</div>
      <div className={s.gridCard__content}>
        <div className={s.gridCard__title}>{title}</div>
        <div className={s.gridCard__description}>{description}</div>
      </div>
      <div className={s.gridCard__button}>
        <ButtonCard title={titleBtn} disabled={disabled} type={buttonType} />
      </div>
    </div>
  );

  return (
    <NavLink data-test-id='card' to={`${Paths.BOOKS}/category/${id}`}>
      {view === 'GRID' ? bookCardGrid() : bookCardList()}
    </NavLink>
  );
});
