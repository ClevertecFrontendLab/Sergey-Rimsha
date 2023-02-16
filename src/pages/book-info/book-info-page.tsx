import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { BookInfoI } from '../../interface/book-info-i/book-info-i';
import { getBookInfoTC } from '../../store/book-info-reducer';
import { cards } from '../main/main-page';

import { Comments, Description, Header, Info, Rating, SwiperCustom } from './components';

import s from './book-info-page.module.scss';

export const BookInfoPage = () => {
  const { id, category } = useParams();
  const dispatch = useAppDispatch();

  const book = useAppSelector<BookInfoI>((state) => state.bookInfo.book);

  // const card = cards.find((element) => element.id === id);

  const disabled = false;

  const titleBtn = 'Забронировать';

  // if (card?.booking.status === 'open') {
  //   titleBtn = 'Забронировать';
  // } else if (card?.booking.status === 'complete') {
  //   titleBtn = 'Забронирована';
  // } else {
  //   disabled = true;
  // }

  useEffect(() => {
    if (id) {
      dispatch(getBookInfoTC(id));
    }
  }, [dispatch, id]);

  return (
    <section className={s.bookInfo}>
      <Header bookName={book.title} category={category} />
      <div className={s.container}>
        <div className={s.bookInfo__content}>
          <SwiperCustom images={book.images} />
          <div className={s.bookInfo__box}>
            <div className={s.bookInfo__title}>{book.title}</div>
            <div className={s.bookInfo__author}>{book.authors[0]}</div>
            <div className={s.bookInfo__button}>
              <button disabled={disabled} type='button'>
                {titleBtn}
              </button>
            </div>
            <Description description={book.description} showOnly='lg' />
          </div>
        </div>
        <Description description={book.description} showOnly='md' />
        <Rating ratingValue={book.rating} />
        <Info />
        <Comments comments={book.comments} />
      </div>
    </section>
  );
};
