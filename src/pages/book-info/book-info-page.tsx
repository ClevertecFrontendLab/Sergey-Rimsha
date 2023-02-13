import { useParams } from 'react-router-dom';

import { cards } from '../main/main-page';

import { Comments, Description, Header, Info, Rating, SwiperCustom } from './components';

import s from './book-info-page.module.scss';

export const BookInfoPage = () => {
  const { id } = useParams();

  const card = cards.find((element) => element.id === id);

  let disabled = false;

  let titleBtn = card?.booking.message;

  if (card?.booking.status === 'open') {
    titleBtn = 'Забронировать';
  } else if (card?.booking.status === 'complete') {
    titleBtn = 'Забронирована';
  } else {
    disabled = true;
  }

  return (
    <section className={s.bookInfo}>
      <Header bookName={card?.title} />
      <div className={s.container}>
        <div className={s.bookInfo__content}>
          <SwiperCustom images={card?.image} />
          <div className={s.bookInfo__box}>
            <div className={s.bookInfo__title}>{card?.title}</div>
            <div className={s.bookInfo__author}>{card?.description}</div>
            <div className={s.bookInfo__button}>
              <button disabled={disabled} type='button'>
                {titleBtn}
              </button>
            </div>
            <Description showOnly='lg' />
          </div>
        </div>
        <Description showOnly='md' />
        <Rating ratingValue={card?.rating} />
        <Info />
        <Comments comments={card?.comments} />
      </div>
    </section>
  );
};
